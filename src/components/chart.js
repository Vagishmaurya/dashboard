import Card from 'react-bootstrap/Card';

function TextExample() {
  return (

    <>
          <section className="Similar" id="Similar">
        <div class="max-width">
            <h2 class="title">Similar Blogs</h2>
            <div class="si-content">
            <Card style={{ width: '15rem' }}>
      <Card.Body>
        <img src='house.jpg' height = "75px" weidth = "150px" alt=''></img>
       <h5>My First Home</h5>
       <button type="button" class="btn btn-primary">Read Now</button>
       <div>

       </div>
       <button type="button" class="btn btn-outline-dark">Later</button>
       
      </Card.Body>
    </Card>

    <Card style={{ width: '15rem' }}>
      <Card.Body>
       <img src='house.jpg' height = "75px" alt=''></img>
        <h5>My First School</h5>
        <button type="button" class="btn btn-primary">Read Now</button>
        <div>

        </div>
        <button type="button" class="btn btn-outline-dark">Later</button>
      </Card.Body>
    </Card>

    <Card style={{ width: '15rem' }}>
      <Card.Body>
       <img src='house.jpg' height = '75px' alt=''></img>
       <h5>My College</h5>
       <div>
       <button type="button" class="btn btn-primary">Read Now</button>
      
        </div>
       <button type="button" class="btn btn-outline-dark">Later</button>
      </Card.Body>
    </Card>
      
                    
                
            </div>
        </div>
    </section>

    </>
  );
}

export default TextExample;