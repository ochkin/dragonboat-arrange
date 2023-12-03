import { cost, Boat, Paddler } from "../../arranger/Common.fs.js";
import { Some, unwrap } from "../../arranger/fable_modules/fable-library.4.5.0/Option.js";
import { arrangeRandom } from "../../arranger/search/Random.fs.js";

const SIDES = { "Left": 1, "Right": 2, "Both": 3 }

function toPaddlers( rawInput )
{
    let paddlers = [];
    for (let row of rawInput)
    {
        let side = SIDES[ row[2] ]
        let paddler = new Paddler(row[0], Number( row[1] ), side);
        console.log( paddler );
        paddlers.push( paddler );
    }
    return paddlers;
}

function toTable( boat )
{
    let result = [];
    for (let i=0; i<max(boat.left.length, boat.right.length); i++)
    {
        let newRow = [
            getName( boat.left[i] ),
            getName( boat.right[i] )
        ];
        result.push( newRow );
    }
    return result;
}

export function dummy( input: any[][] )
{
    let result = [ [ "--left--", "--right--" ] ];
    let row = [];
    for (let paddler of input)
    {
        let name = paddler[ 0 ];
        row.push( name );
        if (2 == row.length)
        {
            result.push( row );
            row = [];
        }
    }
    if (1 == row.length)
    {
        row.push( null );
        result.push( row );
    }
    return result;
}

function getName( opt )
{
    let paddler = unwrap( opt );
    return paddler == null ? null : paddler.Name;
}

export function random( input: any[][] )
{
    let paddlers = toPaddlers( input );

    let boat = arrangeRandom( 20, paddlers);
    
    return toTable( boat );
}

function max(a: number, b: number) {
    if (a<b)
        return b;
    else
        return a;
}
