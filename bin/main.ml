open Batteries

let meal_type char =
  if Array.mem char Sys.argv || Array.length Sys.argv < 3 then true else false

let b = meal_type "b"
let l = meal_type "l"
let s = meal_type "s"
let d = meal_type "d"

let days =
  try if Array.length Sys.argv > 1 then int_of_string Sys.argv.(1) else 1
  with _ -> failwith "Please input an int for the number of days!"

let () = Random.self_init ()
let breakfast = BatList.of_enum (BatFile.lines_of "breakfast.txt")
let lunch = BatList.of_enum (BatFile.lines_of "lunch.txt")
let snacks = BatList.of_enum (BatFile.lines_of "snacks.txt")
let dinner = BatList.of_enum (BatFile.lines_of "dinner.txt")

(** Generates a meal from a list, [meals], of meal ideas with name [name]. *)
let generate_meal name meals =
  print_endline (name ^ ":");
  print_endline (List.nth meals (Random.int (List.length meals)))

let rec meal_ideas n =
  let () = print_string "\n" in
  if b then generate_meal "breakfast" breakfast;
  if l then generate_meal "lunch" lunch;
  if s then generate_meal "snack" snacks;
  if d then generate_meal "dinner" dinner;
  if n > 1 then meal_ideas (n - 1) else print_string "\n"

let () = meal_ideas days
