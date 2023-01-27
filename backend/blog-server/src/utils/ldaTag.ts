import lda from 'lda'

function descryptionLdaTagCreation(descryption: string):string[] {
  
    var text = descryption
    var documents = text.match(/[^\.!\?]+[\.!\?]+/g)
    var result = lda(documents, 2, 5)
    const tagsItem = result[0]
    const tags = []
    for (let tag of tagsItem) {
      tags.push(tag.term)
    }
    return tags
    
}

export default { descryptionLdaTagCreation }


