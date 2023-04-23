namespace arranger

[<AutoOpen>]
module Common =
    type SIDE = Left = 1 | Right = 2 | Both = 3
    let canBeLeft side = side = SIDE.Left || side = SIDE.Both
    let canBeRight side = side = SIDE.Right || side = SIDE.Both

    type Paddler = { Name: string; Weight: float; Side: SIDE }

    open System

    type Boat = {
            size: int
            left: Paddler option array
            right: Paddler option array
        }
        with
        override this.ToString () =
            let MAX_NAME_LEN = 46
            let maxNameLen = Seq.append this.left this.right |> Seq.choose id |> Seq.map (fun paddler -> String.length paddler.Name) |> Seq.max |> min MAX_NAME_LEN
            let formatPaddler paddler =
                let name = match paddler with Some paddler -> paddler.Name | None -> ""
                name[ ..maxNameLen-1 ]

            let horizonalLine = String.replicate maxNameLen "═"
            seq {
                yield sprintf "╔%s╦%s╗" horizonalLine horizonalLine
                for l, r in Seq.zip this.left this.right do
                    yield sprintf "║%*s║%-*s║" maxNameLen (formatPaddler l) maxNameLen (formatPaddler r)
                yield sprintf "╚%s╩%s╝" horizonalLine horizonalLine
            } |> String.concat Environment.NewLine

    let cost boat =
        let getWeight = Array.sumBy <| function | Some p -> p.Weight | None -> 0.0
        let leftWeight = getWeight boat.left
        let rightWeight = getWeight boat.right
        let weightDiff = abs( leftWeight - rightWeight ) / ( leftWeight + rightWeight )

        let howManyOnWrongSide boatSide isCompatible = boatSide |> Seq.choose id |> Seq.map (fun p -> p.Side) |> Seq.filter (isCompatible >> not) |> Seq.length
        let wrongSides = float ( howManyOnWrongSide boat.left canBeLeft + howManyOnWrongSide boat.right canBeRight ) * 1.0

        weightDiff + wrongSides