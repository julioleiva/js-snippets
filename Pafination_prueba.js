import React, { useState, useEffect } from "react";

const useFetch = url => {
  const [data, setData] = useState(null);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const doFetch = async () => {
      const fetchData = async () => {
        try {
          setIsFetching(true);
          const response = await fetch(url);
          const data = await response.json();
          setData(data);
        } catch (e) {
          setError(e);
        } finally {
          setIsFetching(false);
        }
      };
      fetchData();
    };

    doFetch();
  }, [url]);
    return {
    data,
    isFetching,
    error,
  };
}


const App = () => {
  const [user, setuser] = useState([]);
  const [numperPage, setNumperPage] = useState(1); // No of pages
  const [userPerPage] = useState(10);
  
  const { data, isFetching, error} = useFetch('https://jsonplaceholder.typicode.com/comments')


  const lastuser = numperPage * userPerPage;
  const firstuser = lastuser - userPerPage;
  const currentuser = user.slice(firstuser, lastuser);
  const pagenumperPage = [];

  for (let i = 1; i <= Math.ceil(user.length / userPerPage); i++) {
    pagenumperPage.push(i);
  }

  const ChangePage = (pagenumperPage) => {
    setNumperPage(pagenumperPage);
  };
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <table>
            <thead>
              <tr>
                <th>S No.</th>
                <th>Name</th>
                <th>Email</th>
                <th>Comment</th>
              </tr>
            </thead>
            <tbody>
              {currentuser.map((Val) => {
                return (
                  <>
                    <tr
                      className="border-2 border-dark text-center"
                      key={Val.id}
                    >
                      <td className="border-2 border-dark th-1">{Val.id}</td>
                      <td className="border-2 border-dark th-1">{Val.name}</td>
                      <td className="border-2 border-dark th-1">{Val.email}</td>
                      <td className="border-2 border-dark th-1">{Val.body}</td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>

          <div className="my-3 text-center">
             <button
              className="px-3 py-1 m-1 text-center btn-primary"
              onClick={() => setnumperPage(numperPage - 1)}
            >
              First
            </button>
             <button
              className="px-3 py-1 m-1 text-center btn-primary"
              onClick={() => setnumperPage(numperPage - 1)}
            >
              Last
            </button>
            <button
              className="px-3 py-1 m-1 text-center btn-primary"
              onClick={() => setnumperPage(numperPage - 1)}
            >
              Previous
            </button>
            <button
              className="px-3 py-1 m-1 text-center btn-primary"
              onClick={() => setnumperPage(numperPage + 1)}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
