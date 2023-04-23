module Tests

open Xunit
open arranger

[<Fact>]
let ``side checks`` () =
    Assert.True( canBeLeft SIDE.Left )
    Assert.True( canBeLeft SIDE.Both )
    Assert.False <| canBeLeft SIDE.Right

    Assert.True <| canBeRight SIDE.Right
    Assert.True <| canBeRight SIDE.Both
    Assert.False <| canBeRight SIDE.Left

[<Fact>]
let ``cost smoke test`` () =
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
    for size in [10; 8; 4; 1] do
        match Seq.map Some paddlers |> Seq.chunkBySize size |> Seq.take 2 |> Seq.toList with
        | [ l; r] ->
            let boat = { size=size; left=l; right=r }
            let c = cost boat
            Assert.True <| (0.0 < c)
        | _ -> Assert.True( false, "unexpected value" )

[<Fact>]
let ``cost basics`` () =
    let balancedBoat = { size=2; left=[| Some {Name="A";Weight=70.5;Side=SIDE.Left}; Some {Name="B";Weight=58.2;Side=SIDE.Both} |];
                                 right=[| Some {Name="C";Weight=64.6;Side=SIDE.Right}; Some {Name="D";Weight=64.1;Side=SIDE.Both} |] }

    let disbalance = { size=2; left=[| Some {Name="A";Weight=70.5;Side=SIDE.Left}; Some {Name="B";Weight=98.2;Side=SIDE.Both} |];
                               right=[| Some {Name="C";Weight=64.6;Side=SIDE.Right}; Some {Name="D";Weight=64.1;Side=SIDE.Both} |] }

    let wrongSides = { size=2; left=[| Some {Name="A";Weight=70.5;Side=SIDE.Right}; Some {Name="B";Weight=58.2;Side=SIDE.Both} |];
                               right=[| Some {Name="C";Weight=64.6;Side=SIDE.Left}; Some {Name="D";Weight=64.1;Side=SIDE.Both} |] }

    let wrongSidesAndDisbalance = { size=2;
                                    left=[| Some {Name="A";Weight=70.5;Side=SIDE.Right}; Some {Name="B";Weight=98.2;Side=SIDE.Both} |];
                                    right=[| Some {Name="C";Weight=64.6;Side=SIDE.Left}; Some {Name="D";Weight=64.1;Side=SIDE.Both} |] }

    Assert.True <| ( cost balancedBoat < cost disbalance )
    Assert.True <| ( cost disbalance < cost wrongSides )
    Assert.True <| ( cost wrongSides < cost wrongSidesAndDisbalance )


