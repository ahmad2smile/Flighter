export interface IAction<P, T> {
	readonly payload: P;
	readonly type: T;
}
