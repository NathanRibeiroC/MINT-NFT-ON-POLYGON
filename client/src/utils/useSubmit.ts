export default function useSubmit(fn:any) {
    return (event:any) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      let values = Object.fromEntries(data.entries());
      return fn(values);
    };
  }