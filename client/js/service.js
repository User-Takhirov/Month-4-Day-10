const url = "http://localhost:3000";

export const getTabData = async () => {
  try {
    const res = await fetch(`${url}/category_names`);
    const data = await res.json();

    return data;
  } catch (error) {
    return error.message;
  }
};

export const getTabContent = async (path) => {
  try {
    const res = await fetch(`${url}${path}`);
    const data = await res.json();

    return data;
  } catch (error) {
    return error.message;
  }
};

export const getPosts = async () => {
  try {
    const res = await fetch(`${url}/input`);
    const data = await res.json();
    return data;
  } catch (error) {
    return error.message;
  }
};

export const Create = async (dataForm) => {
  try {
    const res = await fetch(`${url}/input`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(dataForm),
    });
  } catch (error) {
    return error.message;
  }
};

// export const DeleteItem = async () => {
//   try {
//     const res = await fetch(`${url}/input`, {
//       method: "DELETE",
//     });
//     const data = await res.json();
//     return data;
//   } catch (error) {
//     return error.message;
//   }
// };

export const deleteItem = async (deleteItemId) => {
  try {
    const res = await fetch(`${url}/input/${deleteItemId}`, {
      method: "DELETE",
    });
    const data = await res.json();
    return data;
  } catch (error) {
    return error.message;
  }
};
