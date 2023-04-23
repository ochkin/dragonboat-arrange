namespace arranger

module Program =
    open Common
    open arranger.search.Backtrack
    open arranger.search


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
            { Name="Nanz"; Weight=91.0; Side=SIDE.Right};
            { Name="Sergey"; Weight=84.7; Side=SIDE.Both};
            { Name="Brandon"; Weight=89.1; Side=SIDE.Right};
            { Name="Eugene"; Weight=95; Side=SIDE.Both };

            { Name="Prashant"; Weight=64; Side=SIDE.Right };
            { Name="Kalesh"; Weight=70; Side=SIDE.Right };
            { Name="Kristoffer"; Weight=74; Side=SIDE.Both };
            { Name="Jenna"; Weight=60; Side=SIDE.Right };
            { Name="Norelee"; Weight=53; Side=SIDE.Left }
        |]
        
        let boat = Random.arrangeRandom 10 paddlers // searchBacktrack 6 paddlers //searchRandom 1000 6 paddlers
        printfn "%O" boat
        printfn "Cost = %f" <| cost boat
        0