// useEffect: HTTP requests
//
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'
import {
  fetchPokemon,
  PokemonInfoFallback,
  PokemonDataView,
  PokemonForm,
} from '../pokemon'
import {ErrorBoundary} from 'react-error-boundary'
/* class ErrorBoundary extends React.Component {
  state = {error: null}
  static getDerivedStateFromError(error) {
    return {error}
  }
  render() {
    const {error} = this.state
    if (error) {
      return <this.props.FallbackComponent error={error} />
    }

    return this.props.children
  }
} */

function PokemonInfo({pokemonName}) {
  //  const [pokemon, setPokemon] = React.useState(null)
  //  const [error, setError] = React.useState(null)
  //  const [status, setStatus] = React.useState('idle')

  const [state, setState] = React.useState({
    pokemon: null,
    error: null,
    status: 'idle',
  })
  React.useEffect(() => {
    if (!pokemonName) {
      return
    }

    setState({pokemon: null, error: null, status: 'pending'})
    //setStatus('pending')
    //setError(null)
    //setPokemon(null)
    fetchPokemon(pokemonName)
      .then(pokemonData => {
        setState({pokemon: pokemonData, status: 'resolved'})
        // setPokemon(pokemonData)
        // setStatus('resolved')
      })
      .catch(error => {
        setState({error: error, status: 'rejected'})
        // setError(error)
        // setStatus('rejected')
      })
  }, [pokemonName])

  if (state.status === 'rejected') {
    // return (
    //   <div role="alert">
    //     There was an error:{' '}
    //     <pre style={{whiteSpace: 'normal'}}>{state.error.message}</pre>
    //   </div>
    // )

    throw state.error
  } else if (state.status === 'idle') {
    return 'submit a pokemon'
  } else if (state.status === 'pending') {
    return <PokemonInfoFallback name={pokemonName} />
  } else if (state.status === 'resolved') {
    return <PokemonDataView pokemon={state.pokemon} />
  }

  throw new Error('this is impossible')
}
function ErrorFallback({error, resetErrorBoundary}) {
  return (
    <div role="alert">
      There was an error:{' '}
      <pre style={{whiteSpace: 'normal'}}>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try Again</button>
    </div>
  )
}
function App() {
  const [pokemonName, setPokemonName] = React.useState('')

  function handleSubmit(newPokemonName) {
    setPokemonName(newPokemonName)
  }
  function handleReset() {
    setPokemonName('')
  }
  return (
    <div className="pokemon-info-app">
      <PokemonForm pokemonName={pokemonName} onSubmit={handleSubmit} />
      <hr />
      <div className="pokemon-info">
        <ErrorBoundary
          FallbackComponent={ErrorFallback}
          onReset={handleReset}
          resetKeys={[pokemonName]}
        >
          <PokemonInfo pokemonName={pokemonName} />
        </ErrorBoundary>
      </div>
    </div>
  )
}

export default App
