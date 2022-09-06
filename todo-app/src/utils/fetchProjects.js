import db from '@/fb';

const data = [];

db.collection('projects').onSnapshot(res => {
    const changes = res.docChanges();
    changes.forEach(change => {
      if(change.type === 'added'){
        data.push({
          ...change.doc.data(),
          id: change.doc.id
        })
      }
    })
  })

  export default data;


