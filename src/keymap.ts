// position in this array relates to which CHIP8 key was pressed
export const keyLayout = [
  // row 1
  1,	2,	3,	'C',
  // row 2
  4,	5,	6,	'D',
  // row 3
  7,	8,	9,	'E',
  // row 4
  'A', 0,	'B'	,'F'
];

// this will map keyboard keys to the index above
export const keyMap = {
  // row 1
  1: keyLayout.indexOf(1), 
  2: keyLayout.indexOf(2), 
  3: keyLayout.indexOf(3), 
  4: keyLayout.indexOf('C'),
  // row 2
  'q': keyLayout.indexOf(4), 
  'w': keyLayout.indexOf(5), 
  'e': keyLayout.indexOf(6), 
  'r': keyLayout.indexOf('D'),
  // row 3
  'a': keyLayout.indexOf(7), 
  's': keyLayout.indexOf(8), 
  'd': keyLayout.indexOf(9), 
  "f": keyLayout.indexOf('E'),
  // row 4
  'z': keyLayout.indexOf('A'), 
  'x': keyLayout.indexOf(0), 
  'c': keyLayout.indexOf('B'),
  'v': keyLayout.indexOf('F')
}