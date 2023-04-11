export default function useSubmit(fn:any) {
    return (event:any) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      const values = Object.fromEntries(data.entries());
      return fn(values);
    };
  }