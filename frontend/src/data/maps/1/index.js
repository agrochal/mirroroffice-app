const tmp = [
  [ 6,6,6,6,6,6,6,6,6,0,6,6,6,6,6,6,6,6,6, ],
  [ 6,0,7,8,0,6,0,0,0,0,0,0,0,6,0,7,8,0,6, ],
  [ 6,0,9,10,0,6,0,0,0,0,0,0,0,6,0,9,10,0,6, ],
  [ 6,0,11,12,0,6,0,0,0,0,0,0,0,6,0,11,12,0,6, ],
  [ 6,0,13,14,0,6,0,0,0,0,0,0,0,6,0,13,14,0,6, ],
  [ 6,0,0,0,0,0,0,0,0,0,0,0,0,6,0,0,0,0,6, ],
  [ 6,0,0,0,0,6,0,0,0,0,0,0,0,6,0,0,0,0,6, ],
  [ 6,6,6,6,6,6,0,0,0,0,0,0,0,0,0,0,0,0,6, ],
  [ 6,0,0,0,0,6,0,0,0,0,0,0,0,6,0,0,0,0,6, ],
  [ 6,0,0,0,0,6,0,0,0,0,0,0,0,6,6,6,6,6,6, ],
  [ 6,0,0,0,0,0,0,0,0,0,0,0,0,6,0,0,0,0,6, ],
  [ 6,0,0,0,0,6,0,0,0,0,0,0,0,0,0,0,0,0,6, ],
  [ 6,0,0,0,0,6,0,0,0,0,0,0,0,6,0,0,0,0,6, ],
  [ 6,0,7,8,0,6,6,6,6,0,6,6,6,6,0,7,8,0,6, ],
  [ 6,0,9,10,0,6,0,0,0,0,0,0,0,6,0,9,10,0,6, ],
  [ 6,0,11,12,0,6,0,0,0,0,0,0,0,6,0,11,12,0,6, ],
  [ 6,0,13,14,0,6,0,0,0,0,0,0,0,6,0,13,14,0,6, ],
  [ 6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6, ],
]

let tiles = []

for(let i=0;i<tmp.length;i++){
  let el = []
  for(let j=0;j<tmp[i].length;j++){
    el.push([[i,j],tmp[i][j]])
  }
  tiles.push(el)
}

export default tiles;
