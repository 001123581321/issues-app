const vuejsIssuesRoute = '/repos/vuejs/vue/issues'

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

    const response = await this.app.context.$octokit.request(`GET ${vuejsIssuesRoute}`, params)

    // console.log('response:', response)

    const responseData = response.data

    if(!responseData) {
      return
    }

    commit('setIssues', responseData)
  },

  async getIssueFromGithub({ commit }, params) {
    const issueNumber = params.number
    delete params.type
    delete params.number

    const response = await this.app.context.$octokit.request(`GET ${vuejsIssuesRoute}/${issueNumber}/comments`, params)

    const responseData = response.data

    if(!responseData) {
      return []
    }

    return responseData
  },
}
