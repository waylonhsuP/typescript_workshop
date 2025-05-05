
// Example of a union type that causes TypeScript to throw an error
type LocationState = {
    state: "Loading" | "Success" | "Error";
    coords?: {
        lat: number;
        lng: number;
    }
    error?: {
        message: string;
    }
}

function printLocationState(state: LocationState) {
    switch (state.state) {
        case "Loading":
            console.log("Loading...");
            break;
        case "Success":
            console.log(`Latitude: ${state.coords.lat}, Longitude: ${state.coords.lng}`);
            break;
        case "Error":
            console.error(`Error: ${state.error.message}`);
            break;
    }
}

/* 為什麼這段程式碼會拋出 TypeScript 錯誤？
    這是因為 TypeScript 無法保證在訪問 `coords` 和 `error` 屬性時，它們一定有被定義。
    在 "Success" 的情況下，`coords` 是有定義的，但 TypeScript 無法推斷 `error` 是未定義的。
    在 "Error" 的情況下，`error` 是有定義的，但 `coords` 是未定義的。
    這是因為 `coords` 和 `error` 都是可選屬性，TypeScript 無法正確地縮小它們的類型範圍。
    如果在未檢查是否存在的情況下直接訪問這些屬性，可能會導致執行時錯誤。
    為了解決這個問題，我們可以使用「判別式聯合類型（discriminated unions）」來為每種狀態創建不同的型別。
    透過為每個狀態建立獨立的型別，可以確保相應的屬性有被正確地定義和使用。
    TypeScript 就能根據 `state` 屬性正確地推斷其對應的型別。
*/

type LoadingLocationState = {
    state: "Loading";
};

type SuccessLocationState = {
    state: "Success";
    coords: {
        lat: number;
        lng: number;
    }
};

type ErrorLocationState = {
    state: "Error";
    error: {
        message: string;
    }
};

type PreventTSErrorLocationState = LoadingLocationState | SuccessLocationState | ErrorLocationState;

function printLocationState2(state: PreventTSErrorLocationState) {
    switch (state.state) {
        case "Loading":
            console.log("Loading...");
            break;
        case "Success":
            console.log(`Latitude: ${state.coords.lat}, Longitude: ${state.coords.lng}`);
            break;
        case "Error":
            console.error(`Error: ${state.error.message}`);
            break;
    }
}