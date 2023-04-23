namespace arranger.search

module Random =
    open arranger.Common
    
    let arrangeRandom size paddlers =
        match ( size, paddlers ) with
        | ( size, _ ) when size <= 0 -> { size=0; left=Array.empty; right=Array.empty }
        | ( size, [| |] ) -> { size=size; left=Array.create size None; right=Array.create size None }
        | _ ->
            let rand = System.Random()
            let arrangment = Array.init ( Array.length paddlers ) (fun _ -> rand.Next( 2 ) )
            let l = seq { for position, paddler in Array.zip arrangment paddlers do
                                                if position = 0 then
                                                    yield Some paddler } |> Seq.truncate size |> Seq.toArray
            
            let r = seq { for position, paddler in Array.zip arrangment paddlers do
                                    if position = 1 then
                                        yield Some paddler } |> Seq.truncate size |> Seq.toArray
            { size=size;
              left=Array.append l ( Array.create ( size - Array.length l ) None );
              right=Array.append r ( Array.create (size - Array.length r ) None ) }

    let searchRandom attempts size paddlers =
        let arrangements = Seq.init attempts (fun _ -> arrangeRandom size paddlers )
        Seq.minBy cost arrangements
