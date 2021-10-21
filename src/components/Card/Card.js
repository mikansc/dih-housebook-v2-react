import P from "prop-types";

export const Card = (props) => {
  const { avatar, nome, profissao, bio } = props;

  return (
    <div className="card">
      <div class="avatar">
        <img src={avatar} alt={nome} />
      </div>
      <h2>{nome}</h2>
      <span>{profissao}</span>
      <div class="card-content">
        <h2>Bio:</h2>
        <p>{bio}</p>
      </div>
    </div>
  );
};

Card.propTypes = {
  nome: P.string.isRequired,
  avatar: P.string.isRequired,
  bio: P.string.isRequired,
  profissao: P.string.isRequired,
};
