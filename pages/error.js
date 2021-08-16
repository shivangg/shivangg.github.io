const error = () => {
  return (
    <div>
      <button
        type="button"
        onClick={() => {
          throw new Error('Sentry Frontend Error');
        }}
      >
        Throw error
      </button>
    </div>
  );
};

export default error;
