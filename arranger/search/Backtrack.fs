namespace arranger.search

module Backtrack =
    open arranger.Common

    let searchBacktrack size paddlers =
        assert ( 0 < size )
        assert ( 0 < Array.length paddlers )

        let initialSizeLeft = min size <| Array.length paddlers
        let mutable lefts = List.rev [ 0..initialSizeLeft-1 ]
        let initialSizeRight = min size <| ( (Array.length paddlers) - initialSizeLeft )
        let mutable rights = List.rev [ initialSizeLeft..initialSizeLeft+initialSizeRight-1 ]
        // let mutable outs = []

        let makeBoat () =
            let getOneSide indexes =
                Seq.concat [ seq { for i in List.rev indexes -> Some paddlers[i] }; Seq.initInfinite (fun _ -> None)] |> Seq.take size |> Array.ofSeq
            { size=size; left=getOneSide lefts; right=getOneSide rights }

        let traverse = seq {
            let mutable haveMoreToTraverse = true
            while haveMoreToTraverse do
                let boatIsFull = List.length lefts = size && List.length rights = size
                let nothingLeft = (Array.length paddlers) - (List.length lefts) - (List.length rights)  = 0 // - (List.length outs)
                if boatIsFull || nothingLeft then
                    yield Boat.Make size [ for l in lefts -> paddlers[l] ] [ for r in rights -> paddlers[r] ]

                // go up to the first paddler that can move
                let mutable mover = None
                let mutable backup = []
                while haveMoreToTraverse && Option.isNone mover do
                    let maxInLeft = (not <| List.isEmpty lefts) && (List.isEmpty rights || List.head rights < List.head lefts )
                    let maxInRight = (not <| List.isEmpty rights) && (List.isEmpty lefts || List.head lefts < List.head rights )
                    if maxInRight then
                        let h::t = rights
                        rights <- t
                        backup <- h :: backup
                    else
                        if maxInLeft then
                            let h::t = lefts
                            lefts <- t
                            let canMove = List.length rights < size
                            if canMove then
                                mover <- Some h
                            else
                                backup <- h :: backup
                        else
                            haveMoreToTraverse <- false

                // move the paddler (L -> R -> O )
                match mover with
                | Some number ->
                    rights <- number :: rights
                    
                    // fill up the empty slots
                    while List.length lefts < size && not <| List.isEmpty backup do
                        let h::t = backup
                        backup <- t
                        lefts <- h :: lefts
                    while not <| List.isEmpty backup do
                        let h::t = backup
                        backup <- t
                        rights <- h :: rights
                    assert (List.length rights <= size)
                | None ->
                    ()
        }
        traverse |> Seq.minBy cost
