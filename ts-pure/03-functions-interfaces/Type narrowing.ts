/*
Type Narrowing в TypeScript — это когда компилятор сам понимает, 
что переменная в определённой ветке кода имеет более узкий тип, чем объявлено изначально.
*/



{
    function format(value: string | number | null) {
  if (typeof value === "string") {
    // value: string
    return value.toUpperCase();
  }

  if (typeof value === "number") {
    // value: number
    return value.toFixed(2);
  }

  // value: null
  return "—";
}
}
////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
{
type Status = "loading" | "success" | "error";

function show(status: Status | null) {
  if (status === "loading") {
    // status: "loading"
  }

  if (status === null) {
    // status: null
  }

  // status: "success" | "error"
}
}

////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////

{
    type Result = { ok: true;  value: string } | { ok: false; error: Error };

function handle(r: Result) {
  if (r.ok === true) {
    // r: { ok: true; value: string }
    console.log(r.value);
  } else {
    // r: { ok: false; error: Error }
    console.log(r.error);
  }
}
}