import { useState, useEffect } from "react";

function useLocalStorage(key, initialValue) {
  //Stored Value: Value gotten from local Storage
  //setStoreValue: the function use to update the value later....
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);

      return item ? JSON.parse(item) : initialValue;
    } catch (err) {
      console.log("Error encountered while getting item from localstorage");
    }
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(storedValue));
  }, [key, storedValue]);

  const filterItem = (callback) => {
    if (!Array.isArray(storedValue)) return;
    const filteredItems = storedValue.filter(callback);
    setStoredValue(filteredItems);
  };

  return [storedValue, setStoredValue, filterItem];
}

export default useLocalStorage;
