type Action = {
  type: string;
  payload: any;
};

type UserInitState = {
  currentUser: string;
  token: string;
};

let userInitState: UserInitState = {
  currentUser: "",
  token: "",
};

function UserReducer({ action, state }: { action: Action; state: UserInitState }): UserInitState {
  switch (action.type) {
    case "Set Current User":
      return { ...state, currentUser: action.payload };
    case "Set Current Token":
      return { ...state, token: action.payload };
    default:
      return state;
  }
}

function userDispatch(action: Action) {
  userInitState = UserReducer({ action, state: userInitState });
}

type MovieInitState = {
  currentMovie: string;
  movieList: string[];
};

let movieInitState: MovieInitState = {
  currentMovie: "",
  movieList: [],
};

function MovieReducer({ action, state }: { action: Action; state: MovieInitState }): MovieInitState {
  switch (action.type) {
    case "Set Current Movie":
      return { ...state, currentMovie: action.payload };
    case "Set Movie List":
      return { ...state, movieList: action.payload };
    default:
      return state;
  }
}

function movieDispatch(action: Action) {
  movieInitState = MovieReducer({ action, state: movieInitState });
}

export function allReducer() {
  return {
    userDispatch,
    movieDispatch,
  };
}

export function allSelector() {
  return {
    userSelector: () => userInitState,
    movieSelector: () => movieInitState,
  };
}
