---
to: "src/stores/<%=h.changeCase.param(name)%>/index.ts"
---
import { defineStore } from 'pinia';
import { state } from './state';
import { getters } from './getters';
import { actions } from './actions';

export const use<%=h.changeCase.pascal(name)%>Store = defineStore('<%=h.changeCase.param(name)%>', {
  state,
  getters,
  actions
})
