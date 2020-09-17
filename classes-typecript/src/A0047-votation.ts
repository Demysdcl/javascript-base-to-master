type VotationOption = {
  numberOfVotes: number
  option: string
}

export class Votation {
  private _votationOptions: VotationOption[] = []
  constructor(public details: string) {}

  addVotationOption(votationOption: VotationOption): void {
    this._votationOptions.push(votationOption)
  }

  vote(votationIndex: number): void {
    if (!this._votationOptions[votationIndex]) return
    this._votationOptions[votationIndex].numberOfVotes += 1
  }

  showOptions(): void {
    this._votationOptions.forEach((option) =>
      console.log(option.option, option.numberOfVotes),
    )
  }
}

export class VotationApp {
  private volations: Votation[] = []

  addVotation(votation: Votation): void {
    this.volations.push(votation)
  }

  showVotations(): void {
    this.volations.forEach((vol) => {
      console.log(vol.details)
      vol.showOptions()
      console.log('#######')
    })
  }
}

const votation1 = new Votation('What is your favorite program language?')
votation1.addVotationOption({ option: 'Python', numberOfVotes: 0 })
votation1.addVotationOption({ option: 'Javascript', numberOfVotes: 0 })
votation1.addVotationOption({ option: 'Typescript', numberOfVotes: 0 })
votation1.addVotationOption({ option: 'Java', numberOfVotes: 0 })
votation1.vote(0)
votation1.vote(0)
votation1.vote(0)
votation1.vote(1)
votation1.vote(1)
votation1.vote(3)
votation1.vote(3)
votation1.vote(2)
votation1.vote(3)
votation1.vote(3)

const votation2 = new Votation('What is your favorite color?')
votation2.addVotationOption({ option: 'Blue', numberOfVotes: 0 })
votation2.addVotationOption({ option: 'Red', numberOfVotes: 0 })
votation2.addVotationOption({ option: 'Green', numberOfVotes: 0 })
votation2.addVotationOption({ option: 'Cyan', numberOfVotes: 0 })
votation2.vote(0)
votation2.vote(0)
votation2.vote(0)
votation2.vote(1)
votation2.vote(1)
votation2.vote(3)
votation2.vote(3)
votation2.vote(2)
votation2.vote(2)
votation2.vote(2)

const votationApp = new VotationApp()
votationApp.addVotation(votation1)
votationApp.addVotation(votation2)
votationApp.showVotations()
