const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');

const app = express();
app.use(cors());
app.use(express.json());

const SECRET = 'clave_secreta_para_testing';

// 👉 LOGIN
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  if (username === 'Francisco' && password === '1234') {
    const token = jwt.sign({ username }, SECRET, { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

// 👉 Middleware para verificar el token
function verifyToken(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(403).json({ message: 'Token faltante o inválido' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Token inválido' });
  }
}

// 👉 Endpoint protegido con token: GET /api/posts
app.get('/api/posts', verifyToken, (req, res) => {
  const posts = [
    { id: 1, title: 'Post 1', body: 'Contenido del post 1' },
    { id: 2, title: 'Post 2', body: 'Contenido del post 2' },
  ];

  res.set('Access-Control-Expose-Headers', 'Content-Range');
  res.set('Content-Range', `posts 0-${posts.length - 1}/${posts.length}`);
  res.json(posts);
});


// 👉 Iniciar el servidor
app.listen(3000, () => {
  console.log('✅ Backend corriendo en http://localhost:3000');
});
