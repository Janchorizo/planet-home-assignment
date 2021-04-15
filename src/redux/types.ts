export interface ReduxAction {
    type: string;
    payload: any;
    error?: boolean;
}

export function createActionGenerator(type: string): (payload: any, error?: boolean)=>ReduxAction {
	return (payload: any, error=false)=>({type, payload, error});
}
