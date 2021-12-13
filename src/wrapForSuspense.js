function wrapForSuspense(promise) {
    let status = "pending";
    let result;
    let suspender = promise.then(
      (r) => {
        status = "success";
        result = r;
      },
      (e) => {
        status = "error";
        result = e;
      }
    );
    return {
      read() {
          console.log(suspender, status, result);
        if (status === "pending") {
          throw suspender;
        } else if (status === "error") {
          throw result;
        } else if (status === "success") {
          return result;
        }
      }
    };
  }

  export default wrapForSuspense;