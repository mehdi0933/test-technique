const Post = require('../models/post');


// creation d'un post
exports.createPost = (req, res, next) => {
  const post = new Post({
    title: req.body.title,
    post: req.body.description,
  });
  post.save().then(
    () => {
      res.status(201).json({
        message: 'Post sauvegarde!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};

// afficher un post
exports.getOnePost = (req, res, next) => {
  Post.findOne({
    _id: req.params.id
  }).then(
    (post) => {
      res.status(200).json(post);
    }
  ).catch(
    (error) => {
      res.status(404).json({
        error: error
      });
    }
  );
};

// modifier un post
exports.modifyPost = (req, res, next) => {
  const post = new Post({
    title: req.body.title,
    post: req.body.description,
  });
  Post.updateOne({_id: req.params.id}, post).then(
    () => {
      res.status(201).json({
        message: 'Post modifie!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};

// supprime un  post
exports.deletePost = (req, res, next) => {
  Post.deleteOne({_id: req.params.id}).then(
    () => {
      res.status(200).json({
        message: 'supprime!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};

// afficher touts les posts
exports.getAllPost = (req, res, next) => {
  Post.find().then(
    (post) => {
      res.status(200).json(post);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};