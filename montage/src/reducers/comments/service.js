const getComments = async (movieTitle) => {
    const response = await fetch('https://cpsc455montageserver.herokuapp.com/comments/' + movieTitle, {
      method: 'GET'
    });
    return response.json();
  };

const addComment = async (comment) => {
    const response = await fetch('https://cpsc455montageserver.herokuapp.com/comments', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(comment)
    });

    const data = await response.json();
    if (!response.ok) {
        const errorMsg = data?.message;
        throw new Error(errorMsg)
    }

    return data;
};

const deleteComment = async (deleteData) => {
    const response = await fetch('https://cpsc455montageserver.herokuapp.com/comments', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(deleteData)
    });

    const data = await response.json();
    if (!response.ok) {
        const errorMsg = data?.message;
        throw new Error(errorMsg)
    }

    return data;
};

  export default {
      getComments,
      addComment,
      deleteComment
  };