// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// 🐨 add a className prop to each div and apply the correct class names
// based on the text content
// 💰 Here are the available class names: box, box--large, box--medium, box--small
// 💰 each of the elements should have the "box" className applied

// 🐨 add a style prop to each div so their background color
// matches what the text says it should be
// 🐨 also use the style prop to make the font italic
// 💰 Here are available style attributes: backgroundColor, fontStyle

// const smallBox = <div className="box box--small" style={{backgroundColor: 'lightblue', fontStyle: 'italic'}}>small lightblue box</div>
// const mediumBox = <div className="box box--medium" style={{backgroundColor: 'pink', fontStyle: 'italic'}}>medium pink box</div>
// const largeBox = <div className="box box--large" style={{backgroundColor: 'orange', fontStyle: 'italic'}}>large orange box</div>

const Box = ({size="", color="", ...otherProps})=>{
return (
  <div className={`box box--${size}`} style={{backgroundColor: color, fontStyle: 'italic'}} {...otherProps}/>
)
}

function App() {
  return (
    <div>
      <Box size="small" color="lightblue">small lightblue box </Box>
      <Box size="medium" color="pink">medium pink box </Box>
      <Box size="large" color="orange">large orange box </Box>
    </div>
  )
}

export default App