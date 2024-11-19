import React from 'react'
import '../../App.css';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  function handleLogout(){
    localStorage.removeItem('login');
    navigate('/login')
  }
  return (
    <div className='homepg'>
      <h2>Home</h2>
      <button onClick={handleLogout}>LogOut</button>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel metus a odio pharetra sollicitudin. Nam feugiat, sem non varius commodo, urna metus interdum nulla, nec tincidunt mauris turpis ut arcu. Fusce at dui id neque gravida cursus. Sed nec dolor et nisi tristique viverra ut vel odio. Cras fermentum consequat leo, at laoreet purus maximus id. Nullam sit amet arcu vel odio malesuada efficitur. Integer et elit ligula. Vivamus laoreet risus et turpis scelerisque, quis feugiat orci gravida. Pellentesque ut justo sed velit tempus elementum.

Vivamus vehicula venenatis eros, vel fringilla orci gravida eget. Quisque ut purus ac sapien pulvinar dapibus. Mauris auctor accumsan volutpat. Sed suscipit malesuada velit, nec malesuada odio ultrices ac. Suspendisse potenti. Duis feugiat sapien in risus scelerisque cursus. Ut eget erat lectus. Suspendisse ut hendrerit augue, id gravida justo. Integer suscipit nulla vel nisl consectetur, id fermentum nulla tincidunt.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel metus a odio pharetra sollicitudin. Nam feugiat, sem non varius commodo, urna metus interdum nulla, nec tincidunt mauris turpis ut arcu. Fusce at dui id neque gravida cursus. Sed nec dolor et nisi tristique viverra ut vel odio. Cras fermentum consequat leo, at laoreet purus maximus id. Nullam sit amet arcu vel odio malesuada efficitur. Integer et elit ligula. Vivamus laoreet risus et turpis scelerisque, quis feugiat orci gravida. Pellentesque ut justo sed velit tempus elementum.

Vivamus vehicula venenatis eros, vel fringilla orci gravida eget. Quisque ut purus ac sapien pulvinar dapibus. Mauris auctor accumsan volutpat. Sed suscipit malesuada velit, nec malesuada odio ultrices ac. Suspendisse potenti. Duis feugiat sapien in risus scelerisque cursus. Ut eget erat lectus. Suspendisse ut hendrerit augue, id gravida justo. Integer suscipit nulla vel nisl consectetur, id fermentum nulla tincidunt.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel metus a odio pharetra sollicitudin. Nam feugiat, sem non varius commodo, urna metus interdum nulla, nec tincidunt mauris turpis ut arcu. Fusce at dui id neque gravida cursus. Sed nec dolor et nisi tristique viverra ut vel odio. Cras fermentum consequat leo, at laoreet purus maximus id. Nullam sit amet arcu vel odio malesuada efficitur. Integer et elit ligula. Vivamus laoreet risus et turpis scelerisque, quis feugiat orci gravida. Pellentesque ut justo sed velit tempus elementum.

Vivamus vehicula venenatis eros, vel fringilla orci gravida eget. Quisque ut purus ac sapien pulvinar dapibus. Mauris auctor accumsan volutpat. Sed suscipit malesuada velit, nec malesuada odio ultrices ac. Suspendisse potenti. Duis feugiat sapien in risus scelerisque cursus. Ut eget erat lectus. Suspendisse ut hendrerit augue, id gravida justo. Integer suscipit nulla vel nisl consectetur, id fermentum nulla tincidunt.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel metus a odio pharetra sollicitudin. Nam feugiat, sem non varius commodo, urna metus interdum nulla, nec tincidunt mauris turpis ut arcu. Fusce at dui id neque gravida cursus. Sed nec dolor et nisi tristique viverra ut vel odio. Cras fermentum consequat leo, at laoreet purus maximus id. Nullam sit amet arcu vel odio malesuada efficitur. Integer et elit ligula. Vivamus laoreet risus et turpis scelerisque, quis feugiat orci gravida. Pellentesque ut justo sed velit tempus elementum.

Vivamus vehicula venenatis eros, vel fringilla orci gravida eget. Quisque ut purus ac sapien pulvinar dapibus. Mauris auctor accumsan volutpat. Sed suscipit malesuada velit, nec malesuada odio ultrices ac. Suspendisse potenti. Duis feugiat sapien in risus scelerisque cursus. Ut eget erat lectus. Suspendisse ut hendrerit augue, id gravida justo. Integer suscipit nulla vel nisl consectetur, id fermentum nulla tincidunt.
</p>
    </div>
  )
}

export default Home
