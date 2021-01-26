export const GetListItems = () => {
    return Promise.resolve({data: [
        {id: "Danny", TaskName: "Meeting With Danny", Time: "12:20pm"},
        {id: "John", TaskName: "Meeting With John", Time: "2:20pm"},
        {id: "Kids", TaskName: "Kids program", Time: "3:10pm"},
        {id: "Interview", TaskName: "Interview with Google", Time: "4:00pm"}
      ]});
}