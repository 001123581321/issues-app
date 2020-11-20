import {Octokit} from '@octokit/core'
export default async (context, inject) => {
  inject('octokit', new Octokit({auth: process.env.GITHUB_PERSONAL_ACCESS_TOKEN}))

}
