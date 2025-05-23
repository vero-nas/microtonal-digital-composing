// Remember to add visualize to the freq functions above
function visualizeIndex(){
    Gibber.init();
    Gibber.Graphics.init();
    const fog = Fog( .5, Vec3(0));
    const julia = Julia().render();
    camera.pos.z = 2;
    onframe = t => camera.rotation = t/10;
    
    verb = Reverb.space.bus();
    synth = Synth('square.perc', { decay:1/2 }).connect( verb, .5 )
    synth.note.seq( gen( cycle( beats(8) * beats(5) ) * 7 ), Euclid(5,8) )
    
    julia.fold.map( verb, 20, 2 )

 
}