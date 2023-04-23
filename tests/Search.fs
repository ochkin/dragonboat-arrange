module Search

open Xunit
open FsUnit.Xunit
open arranger.search
open arranger.Common
open FsUnitTyped

let sanityChecks (size: int) (boat:arranger.Common.Boat) =
    boat.size |> shouldEqual size
    Array.forall Option.isSome boat.left |> should be True
    Array.forall Option.isSome boat.right |> should be True
    let lefts = Seq.choose id boat.left |> Set.ofSeq
    Set.count lefts |> shouldEqual size
    let rights = Seq.choose id boat.right |> Set.ofSeq
    Set.count rights |> shouldEqual size
    Set.intersect lefts rights |> shouldBeEmpty

[<Fact>]
let ``simple random`` () =
    let randomBoat = Random.arrangeRandom 10 Util.paddlers
    sanityChecks 10 randomBoat

[<Fact>]
let ``random search`` () =
    let randomGenerated = Random.arrangeRandom 10 Util.paddlers
    sanityChecks 10 randomGenerated

    let randomFound = Random.searchRandom 500 10 Util.paddlers
    sanityChecks 10 randomFound

    cost randomFound |> shouldBeSmallerThan ( cost randomGenerated )

[<Fact>]
let ``backtrack basic shecks`` () =
    let boat = Backtrack.searchBacktrack 10 Util.paddlers
    sanityChecks 10 boat

    let c = cost boat
    c |> shouldBeSmallerThan 1.0
    c |> shouldBeGreaterThan 0.0

/// <summary>
/// Relies on random numbers, hence that is a small chance it may fail when the costs are equal.
/// </summary>
[<Fact>]
let ``backtracking is more effective than random`` () =
    let n = 6
    let myPaddlers = Array.take (2*n) Util.paddlers
    let backtracked = Backtrack.searchBacktrack n myPaddlers
    let randomized = Random.searchRandom 100 (2*n) myPaddlers
    cost backtracked |> shouldBeSmallerThan (cost randomized)

