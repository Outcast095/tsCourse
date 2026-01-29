{
type iChocolate = {
    mars: number,
    snickers: number,
    bounty: number
}

type marsAndSnickers = {
    type: "MARS_AND_SNICKERS", // Дискременатор
    mars: number,
    snickers: number,
}

type snickersAndBounty = {
    type: "SNICKERS_AND_BOUNTY" // Дискременатор
    snickers: number,
    bounty: number
}

///  Добавляем дополнительный параметр дискременатор по которому мы можем сужать типы 



const handleChocolateCount = (chocolates: marsAndSnickers | snickersAndBounty): number => {
    
    if(chocolates.type === "MARS_AND_SNICKERS") {
        return chocolates.mars + chocolates.snickers
    } else {
        return chocolates.bounty + chocolates.snickers
    }

   
}
}


{
    type User =
  | { kind: "admin"; permissions: string[] }
  | { kind: "regular"; name: string };

  const user: User = {
    kind:  "admin", permissions: ["hello"]
  }

  const user2: User = {
    kind:  "regular", name: "hello"
  }


    if (user.kind === "admin") {
    user.permissions;   // ок!
    }
}