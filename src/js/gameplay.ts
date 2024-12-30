export interface block {
    pos: number[];
    count: number;
}

export interface field {
    blocks: block[][]
    target: number
}

const generateMines = (count: number, row: number, column: number, clicked: number[]): number[][] => {
    let minePos: number[][] = [[
        Math.floor(Math.random() * row),
        Math.floor(Math.random() * column)]]

    console.log(minePos)

    for (let i = 0; i < count-1; i++) {
        const pos: number[] = [
            Math.floor(Math.random() * row),
            Math.floor(Math.random() * column)]

        let push: boolean = true

        if (pos[0] >= clicked[0] - 1 && pos[0] <= clicked[0] + 1
            && pos[1] >= clicked[1] - 1 && pos[1] <= clicked[1] + 1) {
            push = false;
            i--
        }

        for (let mine of minePos) {
            if (mine[0] == pos[0] && mine[1] == pos[1]) {
                push = false
                i--;
                break;
            }

        }

        if (push) {
            minePos.push(pos)
        }
    }



    return minePos
}

export const baseField = (row: number, column: number): field => {


    let field: block[][] = [
    ];

    for (let i = 0; i < row; i++) {
        field.push([])
        for (let j = 0; j < column; j++) {
            field[i].push({ pos: [i, j], count: 0 })
        }
    }

    const target = 0

    return {blocks: field, target}
}

const injectMinesInField = (field: block[][], minePos: number[][]): block[][] => {
    for (let pos of minePos) {
        field[pos[0]][pos[1]].count = 10

        if (pos[0] != 0) {
            field[pos[0] - 1][pos[1]].count += 1
        }

        if (pos[0] != 0 && pos[1] != 0) {
            field[pos[0] - 1][pos[1] - 1].count += 1
        }

        if (pos[0] != 0 && pos[1] != field[0].length - 1) {
            field[pos[0] - 1][pos[1] + 1].count += 1
        }

        if (pos[1] != 0) {
            field[pos[0]][pos[1] - 1].count += 1
        }

        if (pos[1] != field[0].length - 1) {
            field[pos[0]][pos[1] + 1].count += 1
        }

        if (pos[0] != field.length - 1) {
            field[pos[0] + 1][pos[1]].count += 1
        }

        if (pos[0] != field.length - 1 && pos[1] != 0) {
            field[pos[0] + 1][pos[1] - 1].count += 1
        }

        if (pos[0] != field.length - 1 && pos[1] != field[0].length - 1) {
            field[pos[0] + 1][pos[1] + 1].count += 1
        }
    }

    return field
}

export const generateField = (field: block[][], clicked: number[]): field => {
    const row = field.length
    const column = field[0].length
    const mineCount: number = Math.ceil((row * column) / 4)

    const target = row*column - mineCount

    const minePos: number[][] = generateMines(mineCount, row, column, clicked)

    field = injectMinesInField(field, minePos)

    return {blocks: field, target}
}

