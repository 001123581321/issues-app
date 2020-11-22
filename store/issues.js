const vuejsIssuesRoute = '/repos/vuejs/vue/issues'

export const state = () => ({
  issues: [],
  pagination: null,
})

export const mutations = {
  setIssues(state, issues) {
    state.issues = issues
  },
  parseGithubPaginationAndSet(state, githubPaginationString) {
    state.pagination = githubPaginationString.split(', ').reduce((accumulator, part) => {
      const match = part.match('<(.*?)>; rel="(.*?)"')
      if (match && match.length === 3) {
        accumulator[match[2]] = match[1]
      }
      return accumulator
    }, {})
  },
}

export const actions = {
  async getIssuesFromGithub({commit}, params) {
    delete params.type

    const response = await this.app.context.$octokit.request(`GET ${vuejsIssuesRoute}`, params)

    const headersLink = response.headers.link

    if (headersLink) {
      commit('parseGithubPaginationAndSet', headersLink)
    }

    const responseData = response.data

    if (!responseData) {
      return
    }

    commit('setIssues', responseData)
  },

  async getIssueFromGithub({commit}, params) {
    const issueNumber = params.number
    delete params.type
    delete params.number

    const response = await this.app.context.$octokit.request(`GET ${vuejsIssuesRoute}/${issueNumber}`, params)

    return response.data
  },

  async getIssueCommentsFromGithub({commit}, params) {
    const issueNumber = params.number
    delete params.type
    delete params.number

    const response = await this.app.context.$octokit.request(`GET ${vuejsIssuesRoute}/${issueNumber}/comments`, params)


    const responseData = response.data

    if (!responseData) {
      return []
    }

    return responseData
  },
}
