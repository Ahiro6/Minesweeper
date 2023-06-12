const generateMines = (count:number, row:number, column:number, clicked:number[]): number[][] => {
    let minePos: number[][] = [[
        Math.floor(Math.random()*row), 
        Math.floor(Math.random()*column)]]

    for(let i = 0; i<count; i++) {
        const pos: number[] = [
            Math.floor(Math.random()*row), 
            Math.floor(Math.random()*column)] 

            let push: boolean = true

            for(let mine of minePos) {
                if(mine[0] == pos[0] && mine[1] == pos[1]) {
                   push = false
                   break
                }

                else if(pos[0] == clicked[0] && pos[1] == clicked[1]) {
                    push = false
                    i--
                    break
                }

                else if(pos[0] == clicked[0]-1 && pos[1] == clicked[1]-1) {
                    push = false
                    i--
                    break
                }

                else if(pos[0] == clicked[0]-1 && pos[1] == clicked[1]) {
                    push = false
                    i--
                    break
                }

                else if(pos[0] == clicked[0]-1 && pos[1] == clicked[1]+1) {
                    push = false
                    i--
                    break
                }

                else if(pos[0] == clicked[0] && pos[1] == clicked[1]-1) {
                    push = false
                    i--
                    break
                }

                else if(pos[0] == clicked[0] && pos[1] == clicked[1]+1) {
                    push = false
                    i--
                    break
                }

                else if(pos[0] == clicked[0]+1 && pos[1] == clicked[1]-1) {
                    push = false
                    i--
                    break
                }

                else if(pos[0] == clicked[0]+1 && pos[1] == clicked[1]) {
                    push = false
                    i--
                    break
                }

                else if(pos[0] == clicked[0]+1 && pos[1] == clicked[1]+1) {
                    push = false
                    i--
                    break
                }
            }

            if(push) {
                minePos.push(pos)
            }
    }

    return minePos
}

export const baseField = (row:number, column:number): number[][] => {
    let field: number[][] = []; 

    for(let i = 0; i<row; i++) {
        field.push([])
        for(let j = 0; j<column; j++) {
            field[i].push(0)
        }
    }

    return field
}

const injectMinesInField = (field:number[][], minePos:number[][]): number[][] => {
    for(let pos of minePos) {
        field[pos[0]][pos[1]] = 10

        if(pos[0] != 0) {
            field[pos[0]-1][pos[1]-1] += 1
            field[pos[0]-1][pos[1]] += 1
            field[pos[0]-1][pos[1]+1] += 1
        }

        field[pos[0]][pos[1]-1] += 1
        field[pos[0]][pos[1]+1] += 1

        if(pos[0] != field.length-1) {
            field[pos[0]+1][pos[1]-1] += 1
            field[pos[0]+1][pos[1]] += 1
            field[pos[0]+1][pos[1]+1] += 1
        }
    }

    return field
}

export const generateField = (row: number, column: number, clicked:number[]): number[][]  => {
    const mineCount: number = Math.ceil((row * column)/4)
    const minePos:number[][] = generateMines(mineCount, row, column, clicked)

    let field: number[][] = baseField(row, column)

    field = injectMinesInField(field, minePos)

    console.log("Field", field)
    //console.log("Test", field[5][3])
    console.log("Mines", minePos)

    return field
}

