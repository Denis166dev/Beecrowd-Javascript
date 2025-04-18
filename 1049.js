let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split('\n');
let p1 = lines.shift();
let p2 = lines.shift();
let p3 = lines.shift();

if(p1 == "vertebrado"){
  if(p2 == "ave"){
    if(p3 == "carnivoro"){
      console.log("aguia");
    }else{
      console.log("pomba");
    }
  }
}
if(p1 == "vertebrado"){
  if(p2 == "mamifero"){
    if(p3 == "onivoro"){
      console.log("homem");
    }else{
      console.log("vaca");
    }
  }
}
if(p1 == "invertebrado"){
  if(p2 == "inseto"){
    if(p3 == "hematofago"){
      console.log("pulga");
    }else{
      console.log("lagarta");
    }
  }
}
if(p1 == "invertebrado"){
  if(p2 == "anelideo"){
    if(p3 == "onivoro"){
      console.log("minhoca");
    }else{
      console.log("sanguessuga");
    }
  }
}