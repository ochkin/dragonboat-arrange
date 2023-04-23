namespace arranger.search

module Random =
    open arranger.Common
    
    let arrangeRandom size paddlers =
        match ( size, paddlers ) with
        | ( size, _ ) when size <= 0 -> { size=0; left=Array.empty; right=Array.empty }
        | ( size, [| |] ) -> { size=size; left=Array.create size None; right=Array.create size None }
        | _ ->
            let rand = System.Random()
            let shuffle a =
                let mutable n = Array.length a
                while 1 < n do
                    let k = rand.Next n
                    n <- n - 1
                    let temp = Array.get a n
                    Array.set a n <| Array.get a k
                    Array.set a k temp

            let tempArray = Array.copy paddlers
            shuffle tempArray
            let leftSize = min size ((1 + Array.length tempArray)/2)
            let l = tempArray[..leftSize-1] |> List.ofArray
            let r = tempArray[leftSize..leftSize+size-1] |> List.ofArray
            Boat.Make size l r


    let searchRandom attempts size paddlers =
        let arrangements = Seq.init attempts (fun _ -> arrangeRandom size paddlers )
        Seq.minBy cost arrangements
