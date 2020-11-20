
export const state = () => ({
  issues: [],
})

export const mutations = {
  setIssues(state, issues) {
    state.issues = issues
  }
}

export const actions = {
  async getIssuesFromGithub({ commit }, params) {
    delete params.type

    const response = await this.app.context.$octokit.request('GET /repos/vuejs/vue/issues', params)

    // console.log('response:', response)

    const responseData = response.data

    if(!responseData) {
      return
    }

    commit('setIssues', responseData)
  },
}
