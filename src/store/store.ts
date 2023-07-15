/**
 * @author heyq
 * @create 2023/7/15
 * @path src/store
 * @project client
 * @organization nizhou-studio
 */
import { createSlice, configureStore, PayloadAction } from '@reduxjs/toolkit';

const counterSlice = createSlice({
	name: 'counter',
	initialState: {
		value: 0,
	},
	reducers: {
		incremented: (state, action: PayloadAction<number>) => {
			// Redux Toolkit 允许在 reducers 中编写 "mutating" 逻辑。
			// 它实际上并没有改变 state，因为使用的是 Immer 库，检测到“草稿 state”的变化并产生一个全新的
			// 基于这些更改的不可变的 state。
			state.value += action.payload;
		},
		decremented: (state) => {
			state.value -= 1;
		},
	},
});

export const { incremented, decremented } = counterSlice.actions;

const store = configureStore({
	reducer: counterSlice.reducer,
});

export default store;

// 可以订阅 store
store.subscribe(() => console.log(store.getState()));

// 将我们所创建的 action 对象传递给 `dispatch`
store.dispatch(incremented(1));
// {value: 1}
store.dispatch(incremented(2));
// {value: 2}
store.dispatch(decremented());
// {value: 1}
