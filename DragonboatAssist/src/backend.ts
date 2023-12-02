export function dummy( input )
{
    // let left = [];
    // let right = [];
    // let turn = true;
    // for (let paddler of input )
    // {
    //     let name = paddler[0];
    //     if ( turn )
    //         left.push( name );
    //     else
    //         right.push( name );
    //     turn = !turn;
    // }
    // while (right.length < left.length)
    //     right.push(null);
    // return [ left, right ];

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