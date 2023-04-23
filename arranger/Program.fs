namespace arranger

module Program =
    open Common
    open arranger.search.Backtrack


    [<EntryPoint>]
    let main args =
        // printfn "Arguments passed to function : %A" args
        let paddlers = [|
            { Name="Raymark"; Weight=65; Side=SIDE.Left };
            { Name="Roly"; Weight=63; Side=SIDE.Both };
            { Name="Iya"; Weight=54; Side=SIDE.Right };
            { Name="John"; Weight=67.6; Side=SIDE.Both };
            { Name="Leo"; Weight=59; Side=SIDE.Both };
            { Name="Doc Pat"; Weight=60; Side=SIDE.Right };
            { Name="LGrace"; Weight=63; Side=SIDE.Left };
            { Name="Joshua"; Weight=85; Side=SIDE.Right };
            { Name="Yormi"; Weight=66; Side=SIDE.Left };
            { Name="Jesus"; Weight=70; Side=SIDE.Both };
            { Name="Shin"; Weight=50; Side=SIDE.Left };
        |]
        
        let boat = searchBacktrack 6 paddlers //searchRandom 1000 6 paddlers
        printfn "%O" boat
        printfn "Cost = %f" <| cost boat
        0