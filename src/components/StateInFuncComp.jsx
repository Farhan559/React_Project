import React,{useState} from 'react'

function StateInFuncComp() {
        const [name,setName] = useState('New');
     function updateName(){
        setName('SCIENTISTS HAVE LEARNED TO SUPPLEMENT THE SENSE OF SIGHT IN NUMEROUS WAYS. In front of the tiny pupil of the eye they put, on Mount Palomar, a great monocle 200 inches in diameter, and with it see 2000 times farther into the depths of space. Or they look through a small pair of lenses arranged as a microscope into a drop of water or blood, and magnify by as much as 2000 diameters the living creatures there, many of which are among man’s most dangerous enemies. Or, if we want to see distant happenings on earth, they use some of the previously wasted electromagnetic waves to carry television images which they re-create as light by whipping tiny crystals on a screen with electrons in a vacuum. Or they can bring happenings of long ago and far away as colored motion pictures, by arranging silver atoms and color-absorbing molecules to force light waves into the patterns of original reality. Or if we want to see into the center of a steel casting or the chest of an injured child, they send the information on a beam of penetrating short-wave X rays, and then convert it back into images we can see on a screen or photograph. THUS ALMOST EVERY TYPE OF ELECTROMAGNETIC RADIATION YET DISCOVERED HAS BEEN USED TO EXTEND OUR SENSE OF SIGHT IN SOME WAY.');
     }   
    function HideName(){
        setName('');
    }
    console.log('Rendering');
  return (
    <div>
        <h2>{name}</h2>
        <button onClick={updateName}> See Me</button>
        <button onClick={HideName}> Hide Me</button>
    </div>
  )
}

export default StateInFuncComp
