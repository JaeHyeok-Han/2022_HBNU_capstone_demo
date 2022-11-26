interface Emotion {
  class: string;
  type: string;
  start: number;
  end: number;
}

interface SuccessDTO {
  text: string;
  isFiltering: boolean;
  emotion: Emotion[] | null;
}

interface ErrorDTO {
  error: boolean;
  message: any;
}

const fetchAnalyze = async (text: string): Promise<SuccessDTO | ErrorDTO> => {
  try {
    const response = await fetch("http://203.230.103.35:3000", {
      method: "POST",
      body: JSON.stringify({
        text,
      }),
    });
    if (response.ok) {
      return await response.json();
    } else {
      return {
        error: true,
        message: response.statusText,
      };
    }
  } catch (err) {
    return {
      error: true,
      message: err,
    };
  }
};

export { fetchAnalyze };
