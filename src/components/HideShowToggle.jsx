import React,{useState} from 'react';

function HideShowToggle() {
    const [result , setResult] = useState(true);
  return (
    <div>
        {
            result? <p>    I don’t wish to deny that the flattened, minuscule head of the large-bodied "stegosaurus" houses little brain from our subjective, top-heavy perspective, BUT I do wish to assert that we should not expect more of the beast. FIRST OF ALL, large animals have relatively smaller brains than related, small animals. The correlation of brain size with body size among kindred animals (all reptiles, all mammals, FOR EXAMPLE) is remarkably regular. AS we move from small to large animals, from mice to elephants or small lizards to Komodo dragons, brain size increases, BUT not so fast as body size. IN OTHER WORDS, bodies grow faster than brains, AND large animals have low ratios of brain weight to body weight. IN FACT, brains grow only about two-thirds as fast as bodies. SINCE we have no reason to believe that large animals are consistently stupider than their smaller relatives, we must conclude that large animals require relatively less brain to do as well as smaller animals. IF we do not recognize this relationship, we are likely to underestimate the mental power of very large animals, dinosaurs in particular.

            Stephen Jay Gould, “Were Dinosaurs Dumb?”</p> : null
        }
        
        {/* <button style={{marginRight:"30px"}} onClick={()=>setResult(false)}>Hide</button>
        <button onClick={()=>setResult(true)}>Show</button> */}
        <button onClick={()=>setResult(!result)}>Toggle</button>

    </div>
  )
}

export default HideShowToggle
    
