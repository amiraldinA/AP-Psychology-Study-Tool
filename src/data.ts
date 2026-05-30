import { UnitData } from './types';
import { cyuData } from './cyuData';

const originalStudyData: UnitData[] = [
  {
    id: "unit-1",
    title: "Unit 1: Scientific Foundations of Psychology",
    description: "The scientific attitude, critical thinking, the scientific method, correlation, experimentation, research design, ethics, and statistical reasoning.",
    flashcards: [],
    quiz: [],
    subunits: [
      {
        id: "unit-1-sub-perspectives",
        title: "Perspectives of Psychology",
        description: "The major historical and contemporary approaches to understanding human behavior and mental processes, including the biological, behavioral, cognitive, humanistic, psychodynamic, and social-cultural perspectives.",
        flashcards: [
          { id: "1-0-f1", front: "Biological Perspective", back: "Focuses on how the body and brain enable emotions, memories, and sensory experiences, and how genes combine with the environment to influence individual differences." },
          { id: "1-0-f2", front: "Evolutionary Perspective", back: "Focuses on how the natural selection of traits has promoted the survival of genes." },
          { id: "1-0-f3", front: "Psychodynamic Perspective", back: "Focuses on how behavior springs from unconscious drives and conflicts; evolved from Sigmund Freud's psychoanalysis." },
          { id: "1-0-f4", front: "Behavioral Perspective", back: "Focuses on how we learn observable responses through conditioning and observation (associated with Watson and Skinner)." },
          { id: "1-0-f5", front: "Cognitive Perspective", back: "Focuses on how we encode, process, store, and retrieve information; emphasizes thinking, memory, and problem-solving." },
          { id: "1-0-f6", front: "Humanistic Perspective", back: "Focuses on how we achieve personal growth and self-fulfillment; emphasizes free will, self-actualization, and human potential (associated with Rogers and Maslow)." },
          { id: "1-0-f7", front: "Social-Cultural Perspective", back: "Focuses on how behavior and thinking vary across situations and cultures." },
          { id: "1-0-f8", front: "Biopsychosocial Approach", back: "An integrated approach that incorporates biological, psychological, and social-cultural levels of analysis to provide a complete picture of behavior." }
        ],
        quiz: [
          {
            id: "1-0-q1",
            question: "Which psychological perspective would most likely examine the unconscious motives of a person who displays extreme aggression on the basketball court?",
            options: ["Biological perspective", "Behavioral perspective", "Psychodynamic perspective", "Cognitive perspective"],
            correctAnswer: "Psychodynamic perspective",
            explanation: "The psychodynamic perspective focuses on how behavior springs from unconscious drives and conflicts."
          },
          {
            id: "1-0-q2",
            question: "A researcher studying how different societies express anger and how social norms dictate emotional displays is working primarily from which perspective?",
            options: ["Evolutionary perspective", "Social-cultural perspective", "Humanistic perspective", "Cognitive perspective"],
            correctAnswer: "Social-cultural perspective",
            explanation: "The social-cultural perspective focuses on how behavior and thinking vary across situations and cultures."
          }
        ]
      },
      {
        id: "unit-1-sub-scientific-attitude",
        title: "The Scientific Attitude & Critical Thinking",
        description: "The foundations of psychological science, cognitive biases, and critical thinking.",
        flashcards: [
          { id: "1-1-f1", front: "The Scientific Attitude", back: "The underlying passion for exploring and understanding without misleading or being misled; requires curiosity, skepticism, and humility." },
          { id: "1-1-f2", front: "Critical Thinking", back: "Thinking that does not automatically accept arguments and conclusions. It examines assumptions, appraises the source, discerns hidden biases, evaluates evidence, and assesses conclusions." },
          { id: "1-1-f3", front: "Hindsight Bias", back: "The tendency to believe, after learning an outcome, that one would have foreseen it. (Also known as the I-knew-it-all-along phenomenon.)" },
          { id: "1-1-f4", front: "Overconfidence", back: "The tendency to think we know more than we do; overestimating the accuracy of our beliefs and predictions." },
          { id: "1-1-f5", front: "Perceiving Order in Random Events", back: "The human tendency to seek patterns and make sense of the world, often finding streaks or patterns in purely random data." },
          { id: "1-1-f6", front: "James Randi", back: "Magician and skeptic who famously tested and debunked supposed psychic phenomena using an evidence-based, scientific approach." }
        ],
        quiz: [
          {
            id: "1-1-q1",
            question: "After a local team wins a championship, a fan claims they 'knew they were going to win all along,' despite earlier doubts. This best illustrates:",
            options: ["Overconfidence", "Hindsight bias", "Critical thinking", "Perceiving order in random events"],
            correctAnswer: "Hindsight bias",
            explanation: "Hindsight bias is the tendency to believe, after learning an outcome, that one would have foreseen it."
          },
          {
            id: "1-1-q2",
            question: "Which of the following is NOT one of the three main components of the scientific attitude?",
            options: ["Curiosity", "Skepticism", "Cynicism", "Humility"],
            correctAnswer: "Cynicism",
            explanation: "The scientific attitude requires being skeptical but not cynical, and open-minded but not gullible. It consists of curiosity, skepticism, and humility."
          }
        ]
      },
      {
        id: "unit-1-sub-research-methods",
        title: "Research Methods, Design, & Ethics",
        description: "The scientific method, experimental and non-experimental designs, and psychology's ethical guidelines.",
        flashcards: [
          { id: "1-2-f1", front: "Theory", back: "An explanation using an integrated set of principles that organizes observations and predicts behaviors or events." },
          { id: "1-2-f2", front: "Hypothesis", back: "A testable prediction, often implied by a theory; its falsifiability is a mark of scientific strength." },
          { id: "1-2-f3", front: "Operational Definition", back: "A carefully worded statement of the exact procedures (operations) used in a research study, allowing for precise replication." },
          { id: "1-2-f4", front: "Replication", back: "Repeating the essence of a research study, usually with different participants in different situations, to see whether the basic finding can be reproduced." },
          { id: "1-2-f5", front: "Case Study", back: "A non-experimental technique in which one individual or group is studied in depth in the hope of revealing universal principles." },
          { id: "1-2-f6", front: "Naturalistic Observation", back: "A non-experimental technique of observing and recording behavior in naturally occurring situations without trying to manipulate and control the situation." },
          { id: "1-2-f7", front: "Survey", back: "A non-experimental technique for obtaining the self-reported attitudes or behaviors of a particular group, usually by questioning a representative, random sample." },
          { id: "1-2-f8", front: "Social Desirability Bias", back: "Bias from people's responding in ways they presume a researcher expects or wishes." },
          { id: "1-2-f9", front: "Self-Report Bias", back: "Bias that occurs when people report their behavior inaccurately." },
          { id: "1-2-f10", front: "Sampling Bias", back: "A flawed sampling process that produces an unrepresentative sample." },
          { id: "1-2-f11", front: "Random Sample", back: "A sample that fairly represents a population because each member has an equal chance of inclusion." },
          { id: "1-2-f12", front: "Population", back: "All those in a group being studied, from which samples may be drawn." },
          { id: "1-2-f13", front: "Correlation", back: "A measure of the extent to which two factors vary together, and thus of how well either factor predicts the other." },
          { id: "1-2-f14", front: "Correlation Coefficient", back: "A statistical index of the relationship between two things (from -1.00 to +1.00)." },
          { id: "1-2-f15", front: "Variable", back: "Anything that can vary and is feasible and ethical to measure." },
          { id: "1-2-f16", front: "Scatterplot", back: "A graphed cluster of dots, each of which represents the values of two variables. The slope suggests the direction of the relationship." },
          { id: "1-2-f17", front: "Illusory Correlation", back: "Perceiving a relationship where none exists, or perceiving a stronger-than-actual relationship." },
          { id: "1-2-f18", front: "Regression Toward the Mean", back: "The tendency for extreme or unusual scores or events to fall back (regress) toward the average." },
          { id: "1-2-f19", front: "Experiment", back: "A research method in which an investigator manipulates one or more factors (independent variables) to observe the effect on some behavior or mental process (dependent variable)." },
          { id: "1-2-f20", front: "Experimental Group", back: "In an experiment, the group exposed to the treatment, that is, to one version of the independent variable." },
          { id: "1-2-f21", front: "Control Group", back: "In an experiment, the group not exposed to the treatment; serves as a comparison for evaluating the effect of the treatment." },
          { id: "1-2-f22", front: "Random Assignment", back: "Assigning participants to experimental and control groups by chance, minimizing preexisting differences between the groups." },
          { id: "1-2-f23", front: "Single-Blind Procedure", back: "An experimental procedure in which the research participants are ignorant (blind) about whether they have received the treatment or a placebo." },
          { id: "1-2-f24", front: "Double-Blind Procedure", back: "An experimental procedure in which both the research participants and the research staff are ignorant about who received the treatment or placebo." },
          { id: "1-2-f25", front: "Placebo Effect", back: "Experimental results caused by expectations alone; any effect on behavior caused by the administration of an inert substance or condition." },
          { id: "1-2-f26", front: "Independent Variable", back: "In an experiment, the factor that is manipulated; the variable whose effect is being studied." },
          { id: "1-2-f27", front: "Dependent Variable", back: "In an experiment, the outcome that is measured; the variable that may change when the independent variable is manipulated." },
          { id: "1-2-f28", front: "Confounding Variable", back: "In an experiment, a factor other than the factor being studied that might influence a study's results." },
          { id: "1-2-f29", front: "Experimenter Bias", back: "Bias caused when researchers may unintentionally influence results to confirm their own beliefs." },
          { id: "1-2-f30", front: "Validity", back: "The extent to which a test or experiment measures or predicts what it is supposed to." },
          { id: "1-2-f31", front: "Quantitative Research", back: "A research method that relies on quantifiable, numerical data." },
          { id: "1-2-f32", front: "Qualitative Research", back: "A research method that relies on in-depth, narrative data that are not translated into numbers." },
          { id: "1-2-f33", front: "Informed Consent", back: "Giving potential participants enough information about a study to enable them to choose whether they wish to participate." },
          { id: "1-2-f34", front: "Debriefing", back: "The postexperimental explanation of a study, including its purpose and any deceptions, to its participants." },
          { id: "1-2-f35", front: "Peer Reviewers", back: "Scientific experts who evaluate a research article’s theory, originality, and accuracy before it is published." }
        ],
        quiz: [
          {
            id: "1-2-q1",
            question: "Why is an operational definition necessary when reporting research findings?",
            options: ["It provides many examples of the concept.", "It ensures the hypothesis is proven correct.", "It allows others to replicate the study exactly.", "It removes all confounding variables."],
            correctAnswer: "It allows others to replicate the study exactly.",
            explanation: "An operational definition provides a carefully worded statement of the exact procedures used, enabling others to precisely replicate the study."
          },
          {
            id: "1-2-q2",
            question: "Which of the following describes the placebo effect?",
            options: ["Participants know they are in the experimental group.", "Participants in a drug study are given an inert pill instead of the drug and behave as though they were given the drug.", "Only women are chosen for a study despite the population including men.", "Researchers unconsciously skew the data to match their hypothesis."],
            correctAnswer: "Participants in a drug study are given an inert pill instead of the drug and behave as though they were given the drug.",
            explanation: "The placebo effect refers to experimental results caused by expectations alone, reacting to an inert substance as if it were active."
          },
          {
            id: "1-2-q3",
            question: "A researcher wants to ensure that any preexisting differences among participants do not impact the results of an experiment. Which technique should they use?",
            options: ["Random sampling", "Naturalistic observation", "Random assignment", "Factor analysis"],
            correctAnswer: "Random assignment",
            explanation: "Random assignment assigns participants to experimental and control groups by chance, minimizing preexisting differences between the groups."
          }
        ]
      },
      {
        id: "unit-1-sub-statistics",
        title: "Statistical Reasoning in Everyday Life",
        description: "Descriptive and inferential statistics used to measure, describe, and generalize data.",
        flashcards: [
          { id: "1-3-f1", front: "Descriptive Statistics", back: "Numerical data used to measure and describe characteristics of groups; includes measures of central tendency and variation." },
          { id: "1-3-f2", front: "Histogram", back: "A bar graph depicting a frequency distribution." },
          { id: "1-3-f3", front: "Mode", back: "The most frequently occurring score(s) in a distribution." },
          { id: "1-3-f4", front: "Mean", back: "The arithmetic average of a distribution, obtained by adding the scores and then dividing by the number of scores." },
          { id: "1-3-f5", front: "Median", back: "The middle score in a distribution; half the scores are above it and half are below it." },
          { id: "1-3-f6", front: "Percentile Rank", back: "The percentage of scores that are lower than a given score." },
          { id: "1-3-f7", front: "Skewed Distribution", back: "A representation of scores that lack symmetry around their average value (often heavily influenced by outliers)." },
          { id: "1-3-f8", front: "Range", back: "The difference between the highest and lowest scores in a distribution; a crude measure of variation." },
          { id: "1-3-f9", front: "Standard Deviation", back: "A computed measure of how much scores vary around the mean score." },
          { id: "1-3-f10", front: "Normal Curve", back: "A symmetrical, bell-shaped curve that describes the distribution of many types of data; about 68% fall within one standard deviation of the mean." },
          { id: "1-3-f11", front: "Inferential Statistics", back: "Numerical data that allow one to generalize—to infer from sample data the probability of something being true of a population." },
          { id: "1-3-f12", front: "Meta-Analysis", back: "A statistical procedure for analyzing the results of multiple studies to reach an overall conclusion." },
          { id: "1-3-f13", front: "Statistical Significance", back: "A statistical statement of how likely it is that a result occurred by chance, assuming there is no difference between the populations being studied (often p < .05)." },
          { id: "1-3-f14", front: "Effect Size", back: "The strength of the relationship between two variables. The larger it is, the more one variable can be explained by the other." }
        ],
        quiz: [
          {
            id: "1-3-q1",
            question: "Which measure of central tendency is most influenced by skewed data or extreme scores in a distribution?",
            options: ["Mean", "Median", "Mode", "Percentile rank"],
            correctAnswer: "Mean",
            explanation: "The mean is calculated by adding all scores and dividing by the number of scores, making it highly sensitive to extreme outliers that skew the distribution."
          },
          {
            id: "1-3-q2",
            question: "In a normal distribution, what percentage of the scores in the distribution falls within one standard deviation on either side of the mean?",
            options: ["34 percent", "50 percent", "68 percent", "95 percent"],
            correctAnswer: "68 percent",
            explanation: "A useful property of the normal bell curve is that roughly 68 percent of cases fall within one standard deviation on either side of the mean."
          }
        ]
      }
    ]
  },
  {
    id: "unit-2",
    title: "Unit 2: Biological Bases of Behavior",
    description: "The interplay of heredity and environment, the nervous and endocrine systems, brain structures, and states of consciousness including sleep and drugs.",
    flashcards: [],
    quiz: [],
    subunits: [
      {
        id: "unit-2-sub-genetics",
        title: "Interaction of Heredity and Environment",
        description: "Evolutionary psychology, behavior genetics, and the nature-nurture issue.",
        flashcards: [
          { id: "2-1-f1", front: "Biological Psychology", back: "The scientific study of the links between biological (genetic, neural, hormonal) and psychological processes." },
          { id: "2-1-f2", front: "Nature-Nurture Issue", back: "The longstanding controversy over the relative contributions that genes and experience make to the development of psychological traits and behaviors." },
          { id: "2-1-f3", front: "Natural Selection", back: "The principle that the inherited traits enabling an organism to survive and reproduce in a particular environment will most likely be passed on." },
          { id: "2-1-f4", front: "Evolutionary Psychology", back: "The study of the evolution of behavior and the mind, using principles of natural selection." },
          { id: "2-1-f5", front: "Behavior Genetics", back: "The study of the relative power and limits of genetic and environmental influences on behavior." },
          { id: "2-1-f6", front: "Mutation", back: "A random error in gene replication that leads to a change." },
          { id: "2-1-f7", front: "Environment", back: "Every nongenetic influence, from prenatal nutrition to our experiences of the people and things around us." },
          { id: "2-1-f8", front: "Heredity", back: "The genetic transfer of characteristics from parents to offspring." },
          { id: "2-1-f9", front: "Genes", back: "The biochemical units of heredity that make up the chromosomes; segments of DNA." },
          { id: "2-1-f10", front: "Genome", back: "The complete instructions for making an organism, consisting of all the genetic material in that organism's chromosomes." },
          { id: "2-1-f11", front: "Identical (Monozygotic) Twins", back: "Individuals who developed from a single fertilized egg that split in two, creating two genetically identical organisms." },
          { id: "2-1-f12", front: "Fraternal (Dizygotic) Twins", back: "Individuals who developed from separate fertilized eggs. Genetically no closer than siblings, but share a prenatal environment." },
          { id: "2-1-f13", front: "Interaction", back: "The interplay that occurs when the effect of one factor (such as environment) depends on another factor (such as heredity)." },
          { id: "2-1-f14", front: "Epigenetics", back: "The study of the molecular mechanisms by which environments can influence genetic expression (without a DNA change)." },
          { id: "2-1-f15", front: "Charles Darwin", back: "Pioneered the theory of evolution and natural selection, which heavily influenced evolutionary psychology." }
        ],
        quiz: [
          {
            id: "2-1-q1",
            question: "Why do researchers find the study of fraternal twins important?",
            options: [
              "They share similar environments and the same genetic code.",
              "Their environments differ based on their individual traits.",
              "They are usually raised in similar environments, but they do not have the same genetic code.",
              "They are typically raised in less similar environments than non-twin siblings."
            ],
            correctAnswer: "They are usually raised in similar environments, but they do not have the same genetic code.",
            explanation: "Fraternal (dizygotic) twins develop from separate fertilized eggs. They share a prenatal and developmental environment but are genetically no closer than ordinary siblings."
          }
        ]
      },
      {
        id: "unit-2-sub-nervous-endocrine",
        title: "The Nervous and Endocrine Systems",
        description: "Neurons, neurotransmitters, neural networks, and chemical communication.",
        flashcards: [
          { id: "2-2-f1", front: "Nervous System", back: "The body's speedy, electrochemical communication network, consisting of all the nerve cells of the peripheral and central nervous systems." },
          { id: "2-2-f2", front: "Central Nervous System (CNS)", back: "The brain and spinal cord; the body's decision maker." },
          { id: "2-2-f3", front: "Peripheral Nervous System (PNS)", back: "The sensory and motor neurons that connect the CNS to the rest of the body." },
          { id: "2-2-f4", front: "Nerves", back: "Bundled axons that form neural cables connecting the CNS with muscles, glands, and sensory organs." },
          { id: "2-2-f5", front: "Sensory (Afferent) Neurons", back: "Neurons that carry incoming information from the body's tissues and sensory receptors to the brain and spinal cord." },
          { id: "2-2-f6", front: "Motor (Efferent) Neurons", back: "Neurons that carry outgoing information from the brain and spinal cord to the muscles and glands." },
          { id: "2-2-f7", front: "Interneurons", back: "Neurons within the brain and spinal cord; they communicate internally and process information between sensory inputs and motor outputs." },
          { id: "2-2-f8", front: "Somatic Nervous System", back: "The division of the peripheral nervous system that controls the body's skeletal muscles." },
          { id: "2-2-f9", front: "Autonomic Nervous System (ANS)", back: "The part of the PNS that controls the glands and muscles of the internal organs (like the heart). Operates autonomously." },
          { id: "2-2-f10", front: "Sympathetic Nervous System", back: "The division of the autonomic nervous system that arouses the body, mobilizing its energy (fight-or-flight)." },
          { id: "2-2-f11", front: "Parasympathetic Nervous System", back: "The division of the autonomic nervous system that calms the body, conserving its energy (rest-and-digest)." },
          { id: "2-2-f12", front: "Reflex", back: "A simple, automatic response to a sensory stimulus, such as the knee-jerk response." },
          { id: "2-2-f13", front: "Neuron", back: "A nerve cell; the basic building block of the nervous system." },
          { id: "2-2-f14", front: "Cell Body", back: "The part of a neuron that contains the nucleus; the cell's life-support center." },
          { id: "2-2-f15", front: "Dendrites", back: "A neuron's often bushy, branching extensions that receive and integrate messages, conducting impulses toward the cell body." },
          { id: "2-2-f16", front: "Axon", back: "The segmented neuron extension that passes messages through its branches to other neurons or to muscles or glands." },
          { id: "2-2-f17", front: "Myelin Sheath", back: "A fatty tissue layer segmentally encasing the axons of some neurons; enables vastly greater transmission speed." },
          { id: "2-2-f18", front: "Glial Cells (Glia)", back: "Cells in the nervous system that support, nourish, and protect neurons; play a role in learning, thinking, and memory." },
          { id: "2-2-f19", front: "Action Potential", back: "A neural impulse; a brief electrical charge that travels down an axon." },
          { id: "2-2-f20", front: "Threshold", back: "The level of stimulation required to trigger a neural impulse." },
          { id: "2-2-f21", front: "Refractory Period", back: "In neural processing, a brief resting pause that occurs after a neuron has fired; subsequent action potentials cannot occur until the axon returns to resting state." },
          { id: "2-2-f22", front: "All-or-None Response", back: "A neuron's reaction of either firing (with a full-strength response) or not firing." },
          { id: "2-2-f23", front: "Synapse", back: "The junction between the axon tip of the sending neuron and the dendrite or cell body of the receiving neuron. Contains the synaptic gap/cleft." },
          { id: "2-2-f24", front: "Neurotransmitters", back: "Chemical messengers that cross the synaptic gaps between neurons, binding to receptor sites on the receiving neuron." },
          { id: "2-2-f25", front: "Reuptake", back: "A neurotransmitter's reabsorption by the sending neuron." },
          { id: "2-2-f26", front: "Endorphins", back: "'Morphine within'—natural, opioid-like neurotransmitters linked to pain control and pleasure." },
          { id: "2-2-f27", front: "Agonist", back: "A molecule that increases a neurotransmitter's action." },
          { id: "2-2-f28", front: "Antagonist", back: "A molecule that inhibits or blocks a neurotransmitter's action." },
          { id: "2-2-f29", front: "Endocrine System", back: "The body's 'slow' chemical communication system; a set of glands and fat tissue that secrete hormones into the bloodstream." },
          { id: "2-2-f30", front: "Hormones", back: "Chemical messengers that are manufactured by the endocrine glands, travel through the bloodstream, and affect other tissues." }
        ],
        quiz: [
          {
            id: "2-2-q1",
            question: "For a neuron to generate an action potential, which of the following must be true?",
            options: ["The neuron must be in the refractory period.", "Excitatory impulses must outnumber inhibitory impulses.", "Dopamine and serotonin must be present in equal amounts.", "Glial cells must release neurotransmitters into the axon."],
            correctAnswer: "Excitatory impulses must outnumber inhibitory impulses.",
            explanation: "If excitatory signals exceed the inhibitory signals by a minimum intensity (threshold), the combined signals trigger an action potential."
          },
          {
            id: "2-2-q2",
            question: "Which division of the nervous system calms a person down once a stressful event has passed?",
            options: ["Sympathetic", "Central", "Somatic", "Parasympathetic"],
            correctAnswer: "Parasympathetic",
            explanation: "The parasympathetic division of your autonomic nervous system gradually calms your body, conserving its energy after a crisis."
          }
        ]
      },
      {
        id: "unit-2-sub-brain",
        title: "The Brain: Anatomy and Function",
        description: "Tools of discovery, older brain structures, the limbic system, cerebral cortex, and split-brain phenomena.",
        flashcards: [
          { id: "2-3-f1", front: "Biopsychosocial Approach", back: "An integrated approach that incorporates biological, psychological, and social-cultural levels of analysis." },
          { id: "2-3-f2", front: "Levels of Analysis", back: "The differing complementary views, from biological to psychological to social-cultural, for analyzing any given phenomenon." },
          { id: "2-3-f3", front: "Neuroplasticity", back: "The brain's ability to change, especially during childhood, by reorganizing after damage or by building new pathways based on experience." },
          { id: "2-3-f4", front: "Lesion", back: "Tissue destruction; a brain lesion is a naturally or experimentally caused destruction of brain tissue." },
          { id: "2-3-f5", front: "EEG (Electroencephalogram)", back: "An amplified recording of the waves of electrical activity sweeping across the brain's surface, measured by electrodes on the scalp." },
          { id: "2-3-f6", front: "MEG (Magnetoencephalography)", back: "A brain-imaging technique that measures magnetic fields from the brain's natural electrical activity." },
          { id: "2-3-f7", front: "CT (Computed Tomography) Scan", back: "A series of X-ray photographs taken from different angles and combined by computer into a composite representation of a slice of the brain's structure." },
          { id: "2-3-f8", front: "PET (Positron Emission Tomography)", back: "A visual display of brain activity that detects where a radioactive form of glucose goes while the brain performs a given task." },
          { id: "2-3-f9", front: "MRI (Magnetic Resonance Imaging)", back: "A technique that uses magnetic fields and radio waves to produce computer-generated images of soft tissue; shows brain anatomy." },
          { id: "2-3-f10", front: "fMRI (Functional MRI)", back: "A technique for revealing blood flow and, therefore, brain activity by comparing successive MRI scans; shows brain function as well as structure." },
          { id: "2-3-f11", front: "Hindbrain", back: "Consists of the medulla, pons, and cerebellum; directs essential survival functions, such as breathing, sleeping, and coordination." },
          { id: "2-3-f12", front: "Midbrain", back: "Found atop the brainstem; connects the hindbrain with the forebrain, controls some motor movement, and transmits auditory and visual information." },
          { id: "2-3-f13", front: "Forebrain", back: "Consists of the cerebral cortex, thalamus, and hypothalamus; manages complex cognitive activities, sensory and associative functions, and voluntary motor activities." },
          { id: "2-3-f14", front: "Brainstem", back: "The central core of the brain, beginning where the spinal cord swells as it enters the skull; responsible for automatic survival functions." },
          { id: "2-3-f15", front: "Medulla", back: "The hindbrain structure that is the brainstem's base; controls heartbeat and breathing." },
          { id: "2-3-f16", front: "Thalamus", back: "The forebrain's sensory control center, located on top of the brainstem; directs messages to the sensory receiving areas in the cortex." },
          { id: "2-3-f17", front: "Reticular Formation", back: "A nerve network that travels through the brainstem into the thalamus; it filters information and plays an important role in controlling arousal." },
          { id: "2-3-f18", front: "Cerebellum", back: "The hindbrain's 'little brain' at the rear of the brainstem; coordinates voluntary movement and balance, and enables nonverbal learning and memory." },
          { id: "2-3-f19", front: "Limbic System", back: "Neural system located mostly in the forebrain; includes the amygdala, hypothalamus, hippocampus, thalamus, and pituitary gland; associated with emotions and drives." },
          { id: "2-3-f20", front: "Amygdala", back: "Two lima-bean-sized neural clusters in the limbic system; linked to emotion, particularly fear and aggression." },
          { id: "2-3-f21", front: "Hypothalamus", back: "A limbic system neural structure lying below the thalamus; directs maintenance activities (eating, drinking, body temperature), helps govern the endocrine system via the pituitary gland, and is linked to emotion and reward." },
          { id: "2-3-f22", front: "Hippocampus", back: "A neural center located in the limbic system; helps process explicit (conscious) memories—of facts and events—for storage." },
          { id: "2-3-f23", front: "Cerebral Cortex", back: "The intricate fabric of interconnected neural cells covering the forebrain's cerebral hemispheres; the body's ultimate control and information-processing center." },
          { id: "2-3-f24", front: "Frontal Lobes", back: "Portion of the cerebral cortex lying just behind the forehead; involved in speaking, muscle movements, higher-order thinking, and executive functioning (making plans and judgments)." },
          { id: "2-3-f25", front: "Parietal Lobes", back: "Portion of the cerebral cortex lying at the top of the head and toward the rear; receives sensory input for touch and body position." },
          { id: "2-3-f26", front: "Occipital Lobes", back: "Portion of the cerebral cortex lying at the back of the head; includes areas that receive information from the visual fields." },
          { id: "2-3-f27", front: "Temporal Lobes", back: "Portion of the cerebral cortex lying roughly above the ears; includes auditory areas, each receiving information primarily from the opposite ear. Enable language processing." },
          { id: "2-3-f28", front: "Motor Cortex", back: "A cerebral cortex area at the rear of the frontal lobes that controls voluntary movements." },
          { id: "2-3-f29", front: "Somatosensory Cortex", back: "A cerebral cortex area at the front of the parietal lobes that registers and processes body touch and movement sensations." },
          { id: "2-3-f30", front: "Association Areas", back: "Areas of the cerebral cortex not involved in primary motor or sensory functions; involved in higher mental functions such as learning, remembering, thinking, and speaking." },
          { id: "2-3-f31", front: "Neurogenesis", back: "The formation of new neurons." },
          { id: "2-3-f32", front: "Corpus Callosum", back: "The large band of neural fibers connecting the two brain hemispheres and carrying messages between them." },
          { id: "2-3-f33", front: "Roger Sperry & Michael Gazzaniga", back: "Pioneering neuroscientists who studied split-brain patients, mapping out lateralization of brain functions." },
          { id: "2-3-f34", front: "Split Brain", back: "A condition resulting from surgery that isolates the brain's two hemispheres by cutting the fibers (mainly those of the corpus callosum) connecting them." }
        ],
        quiz: [
          {
            id: "2-3-q1",
            question: "A gymnast falls and hits her head on the floor. She attempts to continue practicing but has trouble maintaining balance. What part of her brain has probably been affected?",
            options: ["Reticular formation", "Cerebellum", "Amygdala", "Medulla"],
            correctAnswer: "Cerebellum",
            explanation: "The cerebellum coordinates voluntary movement and balance. Damage to this area causes difficulty walking and keeping balance."
          },
          {
            id: "2-3-q2",
            question: "Damage to which of the following lobes of the brain would most likely result in a decline in executive functions, judgment, and planning?",
            options: ["Occipital lobe", "Temporal lobe", "Frontal lobe", "Parietal lobe"],
            correctAnswer: "Frontal lobe",
            explanation: "The frontal lobes, specifically the prefrontal cortex, are responsible for executive functions, judgment, and planning."
          }
        ]
      },
      {
        id: "unit-2-sub-sleep-drugs",
        title: "Consciousness, Sleep, and Psychoactive Drugs",
        description: "Dual processing, biological rhythms, sleep stages, dreams, and substance use.",
        flashcards: [
          { id: "2-4-f1", front: "Consciousness", back: "Our subjective awareness of ourselves and our environment." },
          { id: "2-4-f2", front: "Cognitive Neuroscience", back: "The interdisciplinary study of the brain activity linked with cognition (thinking, knowing, remembering, and communicating)." },
          { id: "2-4-f3", front: "Dual Processing", back: "The principle that information is often simultaneously processed on separate conscious and unconscious tracks." },
          { id: "2-4-f4", front: "Blindsight", back: "A condition in which a person can respond to a visual stimulus without consciously experiencing it." },
          { id: "2-4-f5", front: "Parallel Processing", back: "Processing multiple aspects of a stimulus or problem simultaneously." },
          { id: "2-4-f6", front: "Sequential Processing", back: "Processing one aspect of a stimulus or problem at a time; generally used to process new information or to solve difficult problems." },
          { id: "2-4-f7", front: "Sleep", back: "A periodic, natural loss of consciousness—as distinct from unconsciousness resulting from a coma, general anesthesia, or hibernation." },
          { id: "2-4-f8", front: "Circadian Rhythm", back: "Our biological clock; regular bodily rhythms (for example, of temperature and wakefulness) that occur on a 24-hour cycle." },
          { id: "2-4-f9", front: "REM Sleep", back: "Rapid eye movement sleep; a recurring sleep stage during which vivid dreams commonly occur. Also known as paradoxical sleep." },
          { id: "2-4-f10", front: "Alpha Waves", back: "The relatively slow brain waves of a relaxed, awake state." },
          { id: "2-4-f11", front: "NREM Sleep", back: "Non-rapid eye movement sleep; encompasses all sleep stages except for REM sleep." },
          { id: "2-4-f12", front: "Hallucinations", back: "False sensory experiences, such as seeing something in the absence of an external visual stimulus." },
          { id: "2-4-f13", front: "Hypnagogic Sensations", back: "Bizarre experiences, such as jerking or a feeling of falling or floating weightlessly, while transitioning to sleep." },
          { id: "2-4-f14", front: "Delta Waves", back: "The large, slow brain waves associated with deep sleep." },
          { id: "2-4-f15", front: "Suprachiasmatic Nucleus (SCN)", back: "A pair of cell clusters in the hypothalamus that controls circadian rhythm. Adjusts melatonin production based on light exposure." },
          { id: "2-4-f16", front: "Insomnia", back: "Recurring problems in falling or staying asleep." },
          { id: "2-4-f17", front: "Narcolepsy", back: "A sleep disorder characterized by uncontrollable sleep attacks. The affected person may lapse directly into REM sleep." },
          { id: "2-4-f18", front: "Sleep Apnea", back: "A sleep disorder characterized by temporary cessations of breathing during sleep and repeated momentary awakenings." },
          { id: "2-4-f19", front: "REM Sleep Behavior Disorder", back: "A sleep disorder in which normal REM paralysis does not occur; instead, twitching, talking, or even kicking or punching may occur, often acting out one's dream." },
          { id: "2-4-f20", front: "Dream", back: "A sequence of images, emotions, and thoughts passing through a sleeping person's mind." },
          { id: "2-4-f21", front: "Sigmund Freud", back: "Proposed that dreams provide a psychic safety valve, containing manifest (remembered) content and a deeper layer of latent (hidden) content." },
          { id: "2-4-f22", front: "REM Rebound", back: "The tendency for REM sleep to increase following REM sleep deprivation." },
          { id: "2-4-f23", front: "Psychoactive Drug", back: "A chemical substance that alters the brain, causing changes in perceptions and moods." },
          { id: "2-4-f24", front: "Substance Use Disorder", back: "A disorder characterized by continued substance use despite significant life disruption." },
          { id: "2-4-f25", front: "Depressants", back: "Drugs that reduce neural activity and slow body functions (e.g., alcohol, barbiturates, opioids)." },
          { id: "2-4-f26", front: "Tolerance", back: "The diminishing effect with regular use of the same dose of a drug, requiring the user to take larger and larger doses before experiencing the drug's effect." },
          { id: "2-4-f27", front: "Addiction", back: "An everyday term for compulsive substance use that continues despite harmful consequences." },
          { id: "2-4-f28", front: "Withdrawal", back: "The discomfort and distress that follow discontinuing an addictive drug or behavior." },
          { id: "2-4-f29", front: "Barbiturates", back: "Drugs that depress central nervous system activity, reducing anxiety but impairing memory and judgment (tranquilizers)." },
          { id: "2-4-f30", front: "Opioids", back: "Opium and its derivatives (like morphine and heroin); they depress neural activity, temporarily lessening pain and anxiety." },
          { id: "2-4-f31", front: "Stimulants", back: "Drugs that excite neural activity and speed up body functions (e.g., caffeine, nicotine, cocaine, amphetamines, ecstasy)." },
          { id: "2-4-f32", front: "Hallucinogens", back: "Psychedelic ('mind-manifesting') drugs that distort perceptions and evoke sensory images in the absence of sensory input (e.g., LSD, marijuana)." },
          { id: "2-4-f33", front: "Near-Death Experience", back: "An altered state of consciousness reported after a close brush with death; often similar to drug-induced hallucinations." }
        ],
        quiz: [
          {
            id: "2-4-q1",
            question: "Which of the following psychological concepts refers to a student's biological clock's sleep-wake pattern that follows a roughly 24-hour cycle?",
            options: ["Melatonin", "Circadian rhythm", "Suprachiasmatic nucleus", "Rapid eye movement sleep"],
            correctAnswer: "Circadian rhythm",
            explanation: "The circadian rhythm is our biological clock; regular bodily rhythms of temperature and wakefulness that occur on a 24-hour cycle."
          },
          {
            id: "2-4-q2",
            question: "Shortly after falling asleep, and hundreds of times during the night, Paola wakes up after a loud gasp because she has stopped breathing. With which sleep disorder would she most likely be diagnosed?",
            options: ["Narcolepsy", "Insomnia", "Sleep apnea", "REM sleep behavior disorder"],
            correctAnswer: "Sleep apnea",
            explanation: "Sleep apnea is a disorder characterized by temporary cessations of breathing during sleep and repeated momentary awakenings."
          }
        ]
      }
    ]
  },
  {
    id: "unit-3",
    title: "Unit 3: Sensation and Perception",
    description: "Transduction, anatomical sensory pathways, vision/hearing processes, psychophysics thresholds, and Gestalt perceptual organization.",
    flashcards: [],
    quiz: [],
    subunits: [
      {
        id: "unit-3-sub-sensation-vision",
        title: "Sensation Basics & Vision",
        description: "Psychophysics, absolute and difference thresholds, the anatomy of the eye, and color processing theories.",
        flashcards: [
          { id: "3-1-f1", front: "Sensation", back: "The process by which our sensory receptors and nervous system receive and represent stimulus energies from our environment." },
          { id: "3-1-f2", front: "Sensory Receptors", back: "Sensory nerve endings that respond to stimuli." },
          { id: "3-1-f3", front: "Perception", back: "The process by which our brain organizes and interprets sensory information, enabling us to recognize objects and events as meaningful." },
          { id: "3-1-f4", front: "Bottom-Up Processing", back: "Information processing that begins with the sensory receptors and works up to the brain's integration of sensory information." },
          { id: "3-1-f5", front: "Top-Down Processing", back: "Information processing guided by higher-level mental processes, as when we construct perceptions drawing on our experience and expectations." },
          { id: "3-1-f6", front: "Transduction", back: "Conversion of one form of energy into another. In sensation, the transforming of physical energy, such as sights, sounds, and smells, into neural impulses the brain can interpret." },
          { id: "3-1-f7", front: "Psychophysics", back: "The study of relationships between the physical characteristics of stimuli, such as their intensity, and our psychological experience of them." },
          { id: "3-1-f8", front: "Gustav Fechner", back: "German scientist and philosopher who studied the edge of our awareness of faint stimuli, known as the absolute threshold." },
          { id: "3-1-f9", front: "Absolute Threshold", back: "The minimum stimulus energy needed to detect a particular stimulus 50 percent of the time." },
          { id: "3-1-f10", front: "Signal Detection Theory", back: "A theory predicting how and when we detect the presence of a faint stimulus (signal) amid background stimulation (noise). Assumes no single absolute threshold." },
          { id: "3-1-f11", front: "Subliminal", back: "Below one's absolute threshold for conscious awareness." },
          { id: "3-1-f12", front: "Priming", back: "The activation, often unconsciously, of certain associations, thus predisposing one's perception, memory, or response." },
          { id: "3-1-f13", front: "Difference Threshold (JND)", back: "The minimum difference between two stimuli required for detection 50 percent of the time. We experience it as a just noticeable difference." },
          { id: "3-1-f14", front: "Ernst Weber / Weber's Law", back: "The principle that, to be perceived as different, two stimuli must differ by a constant minimum percentage (rather than a constant amount)." },
          { id: "3-1-f15", front: "Sensory Adaptation", back: "Diminished sensitivity as a consequence of constant stimulation." },
          { id: "3-1-f16", front: "Wavelength", back: "The distance from the peak of one light or sound wave to the peak of the next. Determines hue in vision." },
          { id: "3-1-f17", front: "Hue", back: "The dimension of color that is determined by the wavelength of light; what we know as the color names blue, green, and so forth." },
          { id: "3-1-f18", front: "Intensity", back: "The amount of energy in a light wave or sound wave, determined by the wave's amplitude (height). Influences brightness or loudness." },
          { id: "3-1-f19", front: "Cornea", back: "The eye's clear, protective outer layer, covering the pupil and iris." },
          { id: "3-1-f20", front: "Pupil", back: "The adjustable opening in the center of the eye through which light enters." },
          { id: "3-1-f21", front: "Iris", back: "A ring of muscle tissue that forms the colored portion of the eye around the pupil and controls the size of the pupil opening." },
          { id: "3-1-f22", front: "Lens", back: "The transparent structure behind the pupil that changes shape to help focus images on the retina." },
          { id: "3-1-f23", front: "Retina", back: "The light-sensitive back inner surface of the eye, containing the receptor rods and cones plus layers of neurons that begin the processing of visual information." },
          { id: "3-1-f24", front: "Accommodation", back: "The process by which the eye's lens changes shape to focus images of near or far objects on the retina." },
          { id: "3-1-f25", front: "Rods", back: "Retinal receptors that detect black, white, and gray, and are sensitive to movement; necessary for peripheral and twilight vision." },
          { id: "3-1-f26", front: "Cones", back: "Retinal receptors that are concentrated near the center of the retina and that function in daylight or in well-lit conditions. Give rise to color sensations and detail." },
          { id: "3-1-f27", front: "Optic Nerve", back: "The nerve that carries neural impulses from the eye to the brain." },
          { id: "3-1-f28", front: "Blind Spot", back: "The point at which the optic nerve leaves the eye, creating a 'blind' spot because no receptor cells are located there." },
          { id: "3-1-f29", front: "Fovea", back: "The central focal point in the retina, around which the eye's cones cluster." },
          { id: "3-1-f30", front: "Young-Helmholtz Trichromatic Theory", back: "The theory that the retina contains three different types of color receptors—one most sensitive to red, one to green, one to blue." },
          { id: "3-1-f31", front: "Opponent-Process Theory", back: "The theory that opposing retinal processes (red-green, blue-yellow, white-black) enable color vision." },
          { id: "3-1-f32", front: "David Hubel & Torsten Wiesel", back: "Nobel Prize winners who discovered feature detectors in the visual cortex." },
          { id: "3-1-f33", front: "Feature Detectors", back: "Nerve cells in the brain's visual cortex that respond to specific features of the stimulus, such as shape, angle, or movement." }
        ],
        quiz: [
          {
            id: "3-1-q1",
            question: "When she sees a photo of a face, Juana is able to recognize it as the face of her mother. Which of the following explains why?",
            options: ["Weber's law", "Bottom-up processing", "Top-down processing", "Signal detection theory"],
            correctAnswer: "Top-down processing",
            explanation: "Top-down processing occurs when we construct perceptions drawing on our experience and expectations, enabling Juana to recognize a familiar face."
          },
          {
            id: "3-1-q2",
            question: "Tyshane went swimming with friends who did not want to get into the pool because the water felt cold. Tyshane jumped in and after a few minutes declared, 'It was cold when I first got in, but now it's fine. Come on in!' Tyshane's body became accustomed to the water temperature due to:",
            options: ["Priming", "Absolute threshold", "Difference threshold", "Sensory adaptation"],
            correctAnswer: "Sensory adaptation",
            explanation: "Sensory adaptation is diminished sensitivity as a consequence of constant stimulation."
          }
        ]
      },
      {
        id: "unit-3-sub-hearing-other",
        title: "Hearing & Other Senses",
        description: "The anatomy of the ear, pitch perception, touch, pain, taste, smell, and body position.",
        flashcards: [
          { id: "3-2-f1", front: "Audition", back: "The sense or act of hearing." },
          { id: "3-2-f2", front: "Frequency", back: "The number of complete wavelengths that pass a point in a given time (for example, per second)." },
          { id: "3-2-f3", front: "Pitch", back: "A tone's experienced highness or lowness; depends on frequency." },
          { id: "3-2-f4", front: "Middle Ear", back: "The chamber between the eardrum and cochlea containing three tiny bones (hammer, anvil, and stirrup) that concentrate the vibrations of the eardrum on the cochlea's oval window." },
          { id: "3-2-f5", front: "Cochlea", back: "A coiled, bony, fluid-filled tube in the inner ear; sound waves traveling through the cochlear fluid trigger nerve impulses." },
          { id: "3-2-f6", front: "Inner Ear", back: "The innermost part of the ear, containing the cochlea, semicircular canals, and vestibular sacs." },
          { id: "3-2-f7", front: "Sensorineural Hearing Loss", back: "The most common form of hearing loss, caused by damage to the cochlea's receptor cells or to the auditory nerve; also called nerve deafness." },
          { id: "3-2-f8", front: "Conduction Hearing Loss", back: "A less common form of hearing loss, caused by damage to the mechanical system that conducts sound waves to the cochlea." },
          { id: "3-2-f9", front: "Cochlear Implant", back: "A device for converting sounds into electrical signals and stimulating the auditory nerve through electrodes threaded into the cochlea." },
          { id: "3-2-f10", front: "Place Theory", back: "In hearing, the theory that links the pitch we hear with the place where the cochlea's membrane is stimulated." },
          { id: "3-2-f11", front: "Frequency Theory", back: "In hearing, the theory that the rate of nerve impulses traveling up the auditory nerve matches the frequency of a tone, thus enabling us to sense its pitch." },
          { id: "3-2-f12", front: "Gate-Control Theory", back: "The theory that the spinal cord contains a neurological 'gate' that blocks pain signals or allows them to pass on to the brain." },
          { id: "3-2-f13", front: "Gustation", back: "Our sense of taste." },
          { id: "3-2-f14", front: "Olfaction", back: "Our sense of smell." },
          { id: "3-2-f15", front: "Kinesthesis", back: "Our movement sense—our system for sensing the position and movement of individual body parts." },
          { id: "3-2-f16", front: "Vestibular Sense", back: "Our balance sense; our sense of body movement and position that enables our sense of balance." },
          { id: "3-2-f17", front: "Sensory Interaction", back: "The principle that one sense may influence another, as when the smell of food influences its taste." },
          { id: "3-2-f18", front: "Embodied Cognition", back: "The influence of bodily sensations, gestures, and other states on cognitive preferences and judgments." }
        ],
        quiz: [
          {
            id: "3-2-q1",
            question: "Which of the following is the best example of sensory interaction?",
            options: [
              "Finding that food tastes bland when you have a bad cold",
              "Finding it difficult to maintain your balance when you have an ear infection",
              "Finding that the cold pool water doesn't feel so cold after a while",
              "Finding that hot peppers get hotter as you consume more of them"
            ],
            correctAnswer: "Finding that food tastes bland when you have a bad cold",
            explanation: "Sensory interaction is the principle that one sense may influence another, such as smell heavily influencing the perception of taste (flavor)."
          },
          {
            id: "3-2-q2",
            question: "Austin damaged the hair-like receptors in his semicircular canals. Which sensation will be most impacted?",
            options: ["Balance", "Smell", "Hearing", "Pain"],
            correctAnswer: "Balance",
            explanation: "The semicircular canals in the inner ear are central to the vestibular sense, which governs body position and balance."
          }
        ]
      },
      {
        id: "unit-3-sub-perception",
        title: "Perceptual Organization and Interpretation",
        description: "How we organize and interpret sensory information, Gestalt principles, depth cues, and perceptual set.",
        flashcards: [
          { id: "3-3-f1", front: "Selective Attention", back: "Focusing conscious awareness on a particular stimulus." },
          { id: "3-3-f2", front: "Inattentional Blindness", back: "Failing to see visible objects when our attention is directed elsewhere." },
          { id: "3-3-f3", front: "Change Blindness", back: "Failing to notice changes in the environment; a form of inattentional blindness." },
          { id: "3-3-f4", front: "Perceptual Set", back: "A mental predisposition to perceive one thing and not another." },
          { id: "3-3-f5", front: "Gestalt", back: "An organized whole. Gestalt psychologists emphasized our tendency to integrate pieces of information into meaningful wholes." },
          { id: "3-3-f6", front: "Figure-Ground", back: "The organization of the visual field into objects (the figures) that stand out from their surroundings (the ground)." },
          { id: "3-3-f7", front: "Grouping", back: "The perceptual tendency to organize stimuli into coherent groups (e.g., proximity, similarity, closure)." },
          { id: "3-3-f8", front: "Depth Perception", back: "The ability to see objects in three dimensions although the images that strike the retina are two-dimensional; allows us to judge distance." },
          { id: "3-3-f9", front: "Visual Cliff", back: "A laboratory device for testing depth perception in infants and young animals." },
          { id: "3-3-f10", front: "Binocular Cue", back: "A depth cue, such as retinal disparity, that depends on the use of two eyes." },
          { id: "3-3-f11", front: "Convergence", back: "A binocular cue to nearby objects' distance, enabled by the brain combining retinal images." },
          { id: "3-3-f12", front: "Retinal Disparity", back: "A binocular depth cue; the brain computes distance by comparing slightly different images from each eye. The greater the disparity, the closer the object." },
          { id: "3-3-f13", front: "Monocular Cue", back: "A depth cue, such as interposition or linear perspective, available to either eye alone." },
          { id: "3-3-f14", front: "Stroboscopic Movement", back: "An illusion of continuous movement experienced when viewing a rapid series of slightly varying still images." },
          { id: "3-3-f15", front: "Phi Phenomenon", back: "An illusion of movement created when two or more adjacent lights blink on and off in quick succession." },
          { id: "3-3-f16", front: "Autokinetic Effect", back: "The illusory movement of a still spot of light in a dark room." },
          { id: "3-3-f17", front: "Perceptual Constancy", back: "Perceiving objects as unchanging (having consistent color, brightness, shape, and size) even as illumination and retinal images change." },
          { id: "3-3-f18", front: "Color Constancy", back: "Perceiving familiar objects as having consistent color, even if changing illumination alters the wavelengths reflected by the object." },
          { id: "3-3-f19", front: "Perceptual Adaptation", back: "The ability to adjust to changed sensory input, including an artificially displaced or even inverted visual field." }
        ],
        quiz: [
          {
            id: "3-3-q1",
            question: "As you look down the road, the lines of the road seem to come together in the distance, even though you know they do not. Which depth cue explains this phenomenon?",
            options: ["Texture gradient", "Interposition", "Light and shadow", "Linear perspective"],
            correctAnswer: "Linear perspective",
            explanation: "Linear perspective is a monocular depth cue where parallel lines appear to meet in the distance."
          },
          {
            id: "3-3-q2",
            question: "Students in a marching band stand close together in tight lines in order to form the initials of their high school. Which Gestalt principle is the marching band using to form the initials?",
            options: ["Convergence", "Linear perspective", "Proximity", "Interposition"],
            correctAnswer: "Proximity",
            explanation: "Proximity is a Gestalt grouping principle where we group nearby figures together to form coherent wholes."
          }
        ]
      }
    ]
  },
  {
    id: "unit-4",
    title: "Unit 4: Learning",
    description: "Classical conditioning, operant reinforcement and punishment schedules, cognitive maps, and observational learning models.",
    flashcards: [],
    quiz: [],
    subunits: [
      {
        id: "unit-4-sub-classical",
        title: "Classical Conditioning",
        description: "How we learn to associate two stimuli and anticipate events (Pavlov and Watson).",
        flashcards: [
          { id: "4-1-f1", front: "Learning", back: "The process of acquiring through experience new and relatively enduring information or behaviors." },
          { id: "4-1-f2", front: "Associative Learning", back: "Learning that certain events occur together. The events may be two stimuli (classical) or a response and its consequence (operant)." },
          { id: "4-1-f3", front: "Stimulus", back: "Any event or situation that evokes a response." },
          { id: "4-1-f4", front: "Respondent Behavior", back: "Behavior that occurs as an automatic response to some stimulus." },
          { id: "4-1-f5", front: "Classical Conditioning", back: "A type of learning in which we link two or more stimuli; the first stimulus comes to elicit behavior in anticipation of the second." },
          { id: "4-1-f6", front: "Behaviorism", back: "The view that psychology (1) should be an objective science that (2) studies behavior without reference to mental processes. Promoted by Watson." },
          { id: "4-1-f7", front: "Neutral Stimulus (NS)", back: "In classical conditioning, a stimulus that elicits no response before conditioning." },
          { id: "4-1-f8", front: "Unconditioned Response (UCR)", back: "In classical conditioning, an unlearned, naturally occurring response (such as salivation) to an unconditioned stimulus." },
          { id: "4-1-f9", front: "Unconditioned Stimulus (UCS)", back: "In classical conditioning, a stimulus that unconditionally—naturally and automatically—triggers an unconditioned response." },
          { id: "4-1-f10", front: "Conditioned Response (CR)", back: "In classical conditioning, a learned response to a previously neutral (but now conditioned) stimulus." },
          { id: "4-1-f11", front: "Conditioned Stimulus (CS)", back: "In classical conditioning, an originally neutral stimulus that, after association with an unconditioned stimulus, comes to trigger a conditioned response." },
          { id: "4-1-f12", front: "Acquisition", back: "The initial learning stage, when one links a neutral stimulus and an unconditioned stimulus so that the neutral stimulus begins triggering the CR." },
          { id: "4-1-f13", front: "Higher-Order Conditioning", back: "A procedure in which the CS in one conditioning experience is paired with a new neutral stimulus, creating a second (often weaker) CS." },
          { id: "4-1-f14", front: "Extinction", back: "The diminishing of a conditioned response when an unconditioned stimulus does not follow a conditioned stimulus." },
          { id: "4-1-f15", front: "Spontaneous Recovery", back: "The reappearance, after a pause, of a weakened conditioned response." },
          { id: "4-1-f16", front: "Generalization", back: "The tendency, once a response has been conditioned, for stimuli similar to the conditioned stimulus to elicit similar responses." },
          { id: "4-1-f17", front: "Discrimination", back: "The learned ability to distinguish between a conditioned stimulus and other irrelevant stimuli." },
          { id: "4-1-f18", front: "Preparedness", back: "A biological predisposition to learn associations, such as between taste and nausea, that have survival value." },
          { id: "4-1-f19", front: "Ivan Pavlov", back: "Russian physiologist whose experiments on dogs' salivation demonstrated that classical conditioning is a basic form of learning." },
          { id: "4-1-f20", front: "John B. Watson", back: "Applied classical conditioning to humans in the 'Little Albert' study, demonstrating how specific fears can be conditioned." },
          { id: "4-1-f21", front: "John Garcia", back: "Researched taste aversion, showing that animals are biologically prepared to learn some associations (taste and nausea) more easily than others." }
        ],
        quiz: [
          {
            id: "4-1-q1",
            question: "A rat jumps each time it sees a green light flash because the green light has always appeared just before an electric shock. The initial learning of the connection between the light and the shock is referred to as:",
            options: ["Spontaneous recovery", "Extinction", "Generalization", "Acquisition"],
            correctAnswer: "Acquisition",
            explanation: "Acquisition is the initial learning stage when an organism links a neutral stimulus and an unconditioned stimulus."
          },
          {
            id: "4-1-q2",
            question: "After repeatedly drinking an alcoholic drink mixed with a drug that produces severe nausea, Xander developed a temporary conditioned aversion to alcohol. The nausea-producing drug is the:",
            options: ["UCS, because it naturally elicits the response.", "CS, because it naturally elicits the response.", "UCS, because the association must be learned.", "CS, because the association must be learned."],
            correctAnswer: "UCS, because it naturally elicits the response.",
            explanation: "An unconditioned stimulus (UCS) unconditionally—naturally and automatically—triggers an unlearned response."
          }
        ]
      },
      {
        id: "unit-4-sub-operant",
        title: "Operant Conditioning",
        description: "How we learn to associate a response and its consequence (Thorndike and Skinner).",
        flashcards: [
          { id: "4-2-f1", front: "Operant Conditioning", back: "A type of learning in which behavior is strengthened if followed by a reinforcer or diminished if followed by a punisher." },
          { id: "4-2-f2", front: "Operant Behavior", back: "Behavior that operates on the environment, producing a consequence." },
          { id: "4-2-f3", front: "Law of Effect", back: "Edward L. Thorndike's principle that behaviors followed by favorable consequences become more likely, and behaviors followed by unfavorable consequences become less likely." },
          { id: "4-2-f4", front: "Operant Chamber (Skinner Box)", back: "A chamber containing a bar or key that an animal can manipulate to obtain a food or water reinforcer, used in operant conditioning research." },
          { id: "4-2-f5", front: "Reinforcement", back: "In operant conditioning, any event that strengthens the behavior it follows." },
          { id: "4-2-f6", front: "Shaping", back: "An operant conditioning procedure in which reinforcers guide behavior toward closer and closer approximations of the desired behavior." },
          { id: "4-2-f7", front: "Discriminative Stimulus", back: "In operant conditioning, a stimulus that elicits a response after association with reinforcement (e.g., a green traffic light)." },
          { id: "4-2-f8", front: "Positive Reinforcement", back: "Increasing behaviors by presenting a pleasurable stimulus after a response." },
          { id: "4-2-f9", front: "Negative Reinforcement", back: "Increasing behaviors by stopping or reducing an aversive stimulus. (Note: Negative reinforcement is NOT punishment)." },
          { id: "4-2-f10", front: "Primary Reinforcer", back: "An innately reinforcing stimulus, such as one that satisfies a biological need (e.g., food or pain relief)." },
          { id: "4-2-f11", front: "Conditioned (Secondary) Reinforcer", back: "A stimulus that gains its reinforcing power through its association with a primary reinforcer (e.g., money or grades)." },
          { id: "4-2-f12", front: "Continuous Reinforcement", back: "Reinforcing the desired response every time it occurs; learning is rapid, but so is extinction." },
          { id: "4-2-f13", front: "Partial (Intermittent) Reinforcement", back: "Reinforcing a response only part of the time; results in slower acquisition but much greater resistance to extinction." },
          { id: "4-2-f14", front: "Fixed-Ratio Schedule", back: "Reinforces a response only after a specified number of responses (e.g., a free coffee after 10 purchases)." },
          { id: "4-2-f15", front: "Variable-Ratio Schedule", back: "Reinforces a response after an unpredictable number of responses (e.g., slot machines); produces high, steady response rates." },
          { id: "4-2-f16", front: "Fixed-Interval Schedule", back: "Reinforces a response only after a specified time has elapsed (e.g., checking mail at delivery time); produces a scalloped pattern." },
          { id: "4-2-f17", front: "Variable-Interval Schedule", back: "Reinforces a response at unpredictable time intervals (e.g., checking for a text message); produces slow, steady responding." },
          { id: "4-2-f18", front: "Punishment", back: "An event that tends to decrease the behavior that it follows. Positive adds an aversive stimulus; negative withdraws a rewarding stimulus." },
          { id: "4-2-f19", front: "Instinctive Drift", back: "The tendency of learned behavior to gradually revert to biologically predisposed patterns." },
          { id: "4-2-f20", front: "B.F. Skinner", back: "Modern behaviorism's most influential and controversial figure; expanded on the law of effect and designed the operant chamber." },
          { id: "4-2-f21", front: "Edward L. Thorndike", back: "Proposed the Law of Effect, paving the way for B.F. Skinner's operant conditioning research." }
        ],
        quiz: [
          {
            id: "4-2-q1",
            question: "A student studies diligently to avoid the bad feelings associated with a previously low grade on a test. The studying behavior is being strengthened by:",
            options: ["Positive reinforcement", "Negative reinforcement", "Positive punishment", "Negative punishment"],
            correctAnswer: "Negative reinforcement",
            explanation: "Negative reinforcement increases a behavior (studying) by stopping or reducing an aversive stimulus (the bad feelings from a low grade)."
          },
          {
            id: "4-2-q2",
            question: "Tunde checks her phone every 30 minutes for incoming text messages, but she finds messages only some of the time. Her behavior is being maintained by which schedule?",
            options: ["Fixed interval", "Variable interval", "Variable ratio", "Fixed ratio"],
            correctAnswer: "Variable interval",
            explanation: "Variable-interval schedules reinforce the first response after varying, unpredictable time intervals, which produces slow, steady responding."
          }
        ]
      },
      {
        id: "unit-4-sub-cognitive-obs",
        title: "Cognitive & Observational Learning",
        description: "How mental processes, maps, and social modeling influence behavior.",
        flashcards: [
          { id: "4-3-f1", front: "Cognitive Learning", back: "The acquisition of mental information, whether by observing events, by watching others, or through language." },
          { id: "4-3-f2", front: "Cognitive Map", back: "A mental representation of the layout of one's environment. Ex: rats learning a maze's layout even without a reward." },
          { id: "4-3-f3", front: "Latent Learning", back: "Learning that occurs but is not apparent until there is an incentive to demonstrate it." },
          { id: "4-3-f4", front: "Insight Learning", back: "Solving problems through a sudden realization of a problem's solution; contrasts with strategy-based solutions." },
          { id: "4-3-f5", front: "Intrinsic Motivation", back: "The desire to perform a behavior effectively for its own sake." },
          { id: "4-3-f6", front: "Extrinsic Motivation", back: "The desire to perform a behavior to receive promised rewards or avoid threatened punishment." },
          { id: "4-3-f7", front: "Observational Learning", back: "Learning by observing others. Also called social learning." },
          { id: "4-3-f8", front: "Modeling", back: "The process of observing and imitating a specific behavior." },
          { id: "4-3-f9", front: "Mirror Neurons", back: "Neurons in the frontal lobe that fire when we perform certain actions or observe others doing so; enables imitation and empathy." },
          { id: "4-3-f10", front: "Prosocial Behavior", back: "Positive, constructive, helpful behavior. The opposite of antisocial behavior." },
          { id: "4-3-f11", front: "Antisocial Behavior", back: "Negative, destructive, harmful behavior that violates social norms." },
          { id: "4-3-f12", front: "Albert Bandura", back: "Pioneering researcher of observational learning, famous for the Bobo doll experiment showing children imitate adult aggression." },
          { id: "4-3-f13", front: "Robert Rescorla", back: "Showed that an animal can learn the predictability of an event, integrating cognitive processes into classical conditioning." },
          { id: "4-3-f14", front: "Edward C. Tolman", back: "Demonstrated that rats developing cognitive maps of mazes experience latent learning without immediate reinforcement." },
          { id: "4-3-f15", front: "Wolfgang Köhler", back: "Studied chimpanzees to demonstrate insight learning—a sudden realization of a problem's solution." }
        ],
        quiz: [
          {
            id: "4-3-q1",
            question: "What did Albert Bandura's Bobo doll experiments demonstrate?",
            options: [
              "There is a negative correlation between televised violence and aggressive behavior.",
              "Children are likely to imitate the aggressive behavior of adults.",
              "Children are more likely to copy what adults say than what adults do.",
              "Observational learning only occurs if a primary reinforcer is present."
            ],
            correctAnswer: "Children are likely to imitate the aggressive behavior of adults.",
            explanation: "Bandura demonstrated observational learning, showing that children will physically and verbally imitate aggressive behaviors observed in adult models."
          },
          {
            id: "4-3-q2",
            question: "Eliza easily remembers how to walk from her classroom to the bathroom and how to walk to the library. Which concept applies?",
            options: ["Latent learning", "Insight", "Cognitive map", "Mirror neurons"],
            correctAnswer: "Cognitive map",
            explanation: "A cognitive map is a mental representation of the layout of one's environment."
          }
        ]
      }
    ]
  },
  {
    id: "unit-5",
    title: "Unit 5: Cognitive Psychology",
    description: "Memory encoding and retrieval, working memory, language, problem-solving, and theories of intelligence.",
    flashcards: [],
    quiz: [],
    subunits: [
      {
        id: "unit-5-sub-memory",
        title: "Memory: Encoding, Storage, & Retrieval",
        description: "How we encode, store, and retrieve information, and why we sometimes forget.",
        flashcards: [
          { id: "5-1-f1", front: "Memory", back: "The persistence of learning over time through the encoding, storage, and retrieval of information." },
          { id: "5-1-f2", front: "Recall", back: "Retrieving information that is not currently in your conscious awareness but that was learned at an earlier time (e.g., fill-in-the-blank)." },
          { id: "5-1-f3", front: "Recognition", back: "Identifying items previously learned (e.g., multiple-choice test)." },
          { id: "5-1-f4", front: "Relearning", back: "Learning something more quickly when you learn it a second or later time." },
          { id: "5-1-f5", front: "Encoding", back: "The process of getting information into the memory system." },
          { id: "5-1-f6", front: "Storage", back: "The process of retaining encoded information over time." },
          { id: "5-1-f7", front: "Retrieval", back: "The process of getting information out of memory storage." },
          { id: "5-1-f8", front: "Parallel Processing", back: "Processing multiple aspects of a stimulus or problem simultaneously." },
          { id: "5-1-f9", front: "Sensory Memory", back: "The immediate, very brief recording of sensory information (iconic and echoic) in the memory system." },
          { id: "5-1-f10", front: "Short-Term Memory", back: "Briefly activated memory of a few items (e.g., George Miller's magical number seven) that is later stored or forgotten." },
          { id: "5-1-f11", front: "Working Memory", back: "A newer understanding of short-term memory; conscious, active processing of incoming sensory info and info retrieved from long-term memory." },
          { id: "5-1-f12", front: "Long-Term Memory", back: "The relatively permanent and limitless archive of the memory system." },
          { id: "5-1-f13", front: "Explicit (Declarative) Memory", back: "Retention of facts and experiences that we can consciously know and 'declare.' Processed in the hippocampus/frontal lobes." },
          { id: "5-1-f14", front: "Implicit (Nondeclarative) Memory", back: "Retention of learned skills or classically conditioned associations independent of conscious recollection. Processed in cerebellum/basal ganglia." },
          { id: "5-1-f15", front: "Effortful vs. Automatic Processing", back: "Effortful requires attention/conscious effort (explicit memories). Automatic happens unconsciously (space, time, frequency, implicit memories)." },
          { id: "5-1-f16", front: "Chunking & Mnemonics", back: "Chunking organizes items into familiar, manageable units. Mnemonics are memory aids using vivid imagery and organizational devices." },
          { id: "5-1-f17", front: "Spacing Effect", back: "The tendency for distributed study or practice to yield better long-term retention than massed study or practice." },
          { id: "5-1-f18", front: "Testing Effect", back: "Enhanced memory after retrieving, rather than simply rereading, information." },
          { id: "5-1-f19", front: "Shallow vs. Deep Processing", back: "Shallow encodes on a basic level (structure/appearance). Deep encodes semantically (meaning), yielding best retention." },
          { id: "5-1-f20", front: "Hippocampus", back: "A neural center in the limbic system that helps process explicit memories for storage (memory consolidation)." },
          { id: "5-1-f21", front: "Long-Term Potentiation (LTP)", back: "An increase in a nerve cell's firing potential after brief, rapid stimulation; a neural basis for learning and memory." },
          { id: "5-1-f22", front: "Flashbulb Memory", back: "A clear memory of an emotionally significant moment or event, facilitated by the amygdala." },
          { id: "5-1-f23", front: "Priming", back: "The activation, often unconsciously, of certain associations, predisposing one's perception, memory, or response." },
          { id: "5-1-f24", front: "Serial Position Effect", back: "Our tendency to recall best the last items (recency) and the first items (primacy) in a list." },
          { id: "5-1-f25", front: "Anterograde vs. Retrograde Amnesia", back: "Anterograde: inability to form new memories. Retrograde: inability to retrieve information from one's past." },
          { id: "5-1-f26", front: "Proactive vs. Retroactive Interference", back: "Proactive: older learning disrupts new info. Retroactive: newer learning disrupts old info." },
          { id: "5-1-f27", front: "Repression", back: "Freud's basic defense mechanism that banishes anxiety-arousing thoughts, feelings, and memories from consciousness." },
          { id: "5-1-f28", front: "Misinformation Effect", back: "Occurs when a memory has been corrupted by misleading information (Elizabeth Loftus' research)." },
          { id: "5-1-f29", front: "Source Amnesia", back: "Faulty memory for how, when, or where information was learned or imagined. A primary cause of false memories." },
          { id: "5-1-f30", front: "Hermann Ebbinghaus", back: "Described the forgetting curve (rapid initial decay that levels off) and showed that retention increases with distributed practice." },
          { id: "5-1-f31", front: "Elizabeth Loftus", back: "Memory researcher who demonstrated the misinformation effect, showing how eyewitnesses reconstruct their memories." },
          { id: "5-1-f32", front: "Central Executive", back: "Coordinates the activities of the phonological loop and visuospatial sketchpad in working memory." },
          { id: "5-1-f33", front: "Phonological Loop", back: "A memory component that briefly holds auditory information in working memory." },
          { id: "5-1-f34", front: "Visuospatial Sketchpad", back: "A memory component that briefly holds information about objects' appearance and location in space." },
          { id: "5-1-f35", front: "Iconic Memory", back: "A momentary sensory memory of visual stimuli; a photographic or picture-image memory lasting no more than a few tenths of a second." },
          { id: "5-1-f36", front: "Echoic Memory", back: "A momentary sensory memory of auditory stimuli; if attention is elsewhere, sounds and words can still be recalled within 3 or 4 seconds." },
          { id: "5-1-f37", front: "Semantic Memory", back: "Explicit memory of facts and general knowledge; one of our two conscious memory systems." },
          { id: "5-1-f38", front: "Episodic Memory", back: "Explicit memory of personally experienced events; one of our two conscious memory systems." },
          { id: "5-1-f39", front: "Memory Consolidation", back: "The neural storage of a long-term memory." },
          { id: "5-1-f40", front: "Reconsolidation", back: "A process in which previously stored memories, when retrieved, are potentially altered before being stored again." },
          { id: "5-1-f41", front: "Mood-Congruent Memory", back: "The tendency to recall experiences that are consistent with one's current good or bad mood." },
          { id: "5-1-f42", front: "Interleaving", back: "A retrieval practice strategy that involves mixing the study of different topics to boost long-term retention." },
          { id: "5-1-f43", front: "Déjà Vu", back: "That eerie sense that 'I've experienced this before.' Cues from the current situation may unconsciously trigger retrieval of an earlier experience." }
        ],
        quiz: [
          {
            id: "5-1-q1",
            question: "Mave got a new car with the license plate 'MAVNUM1'. She is asked for her number but can only remember her old one, 'VANMOM1'. This is an example of:",
            options: ["Retroactive interference", "Proactive interference", "Anterograde amnesia", "Retrograde amnesia"],
            correctAnswer: "Proactive interference",
            explanation: "Proactive interference occurs when older learning (old plate) disrupts the recall of new information (new plate)."
          },
          {
            id: "5-1-q2",
            question: "Which brain structure is primarily responsible for processing explicit, conscious memories for storage?",
            options: ["Cerebellum", "Basal Ganglia", "Hippocampus", "Amygdala"],
            correctAnswer: "Hippocampus",
            explanation: "The hippocampus is a 'save' button that temporarily holds elements of explicit memories before transferring them to the cortex for consolidation."
          }
        ]
      },
      {
        id: "unit-5-sub-thinking-language",
        title: "Thinking, Problem Solving, & Language",
        description: "Concepts, heuristics, decision-making biases, and language development.",
        flashcards: [
          { id: "5-2-f1", front: "Cognition & Metacognition", back: "Cognition: mental activities of thinking, knowing, remembering. Metacognition: thinking about our thinking/evaluating mental processes." },
          { id: "5-2-f2", front: "Concept & Prototype", back: "Concept: mental grouping of similar objects/events. Prototype: mental image or best example of a category." },
          { id: "5-2-f3", front: "Convergent vs. Divergent Thinking", back: "Convergent: narrowing problem solutions to the single best one. Divergent: expanding possible solutions; linked to creativity." },
          { id: "5-2-f4", front: "Algorithm", back: "A methodical, logical rule or procedure that guarantees solving a particular problem." },
          { id: "5-2-f5", front: "Heuristic", back: "A simple thinking strategy/mental shortcut that allows us to make judgments and solve problems efficiently (but more error-prone)." },
          { id: "5-2-f6", front: "Insight", back: "A sudden realization of a problem's solution." },
          { id: "5-2-f7", front: "Confirmation Bias", back: "A tendency to search for information that supports our preconceptions and ignore or distort contradictory evidence." },
          { id: "5-2-f8", front: "Fixation & Mental Set", back: "Fixation: inability to see a problem from a new perspective. Mental Set: tendency to approach a problem in a way that succeeded in the past." },
          { id: "5-2-f9", front: "Representativeness Heuristic", back: "Judging the likelihood of events in terms of how well they seem to represent or match particular prototypes." },
          { id: "5-2-f10", front: "Availability Heuristic", back: "Judging the likelihood of events based on their availability in memory; vividness makes us presume events are common." },
          { id: "5-2-f11", front: "Overconfidence & Belief Perseverance", back: "Overconfidence: overestimating accuracy of our beliefs. Belief Perseverance: clinging to conceptions even after they've been discredited." },
          { id: "5-2-f12", front: "Framing", back: "The way an issue is posed; how it is framed can significantly affect decisions and judgments." },
          { id: "5-2-f13", front: "Phoneme & Morpheme", back: "Phoneme: smallest distinctive sound unit. Morpheme: smallest unit that carries meaning (a word or prefix)." },
          { id: "5-2-f14", front: "Grammar, Semantics, Syntax", back: "Grammar: system of rules. Semantics: deriving meaning from sounds. Syntax: combining words into sensible sentences." },
          { id: "5-2-f15", front: "Babbling, One-Word, Two-Word Stages", back: "Language development milestones from 4 months (babbling) to age 1 (one-word) to age 2 (two-word/telegraphic speech)." },
          { id: "5-2-f16", front: "Aphasia", back: "Impairment of language, caused by left hemisphere damage to Broca's area (speaking) or Wernicke's area (understanding)." },
          { id: "5-2-f17", front: "Linguistic Determinism vs. Relativism", back: "Whorf's extreme determinism: language strictly determines how we think. Relativism: language influences the way we think." },
          { id: "5-2-f18", front: "Noam Chomsky", back: "Proposed humans are born with a predisposition to learn grammar rules (Universal Grammar)." },
          { id: "5-2-f19", front: "Tversky & Kahneman", back: "Cognitive psychologists who demonstrated how heuristics (availability/representativeness) can lead to cognitive biases." },
          { id: "5-2-f20", front: "Executive Functions", back: "Cognitive skills that work together, enabling us to generate, organize, plan, and implement goal-directed behavior." },
          { id: "5-2-f21", front: "Telegraphic Speech", back: "Early speech stage in which a child speaks like a telegram—'go car'—using mostly nouns and verbs." },
          { id: "5-2-f22", front: "Broca's Area", back: "A frontal lobe brain area, usually in the left hemisphere, that helps control language expression/speaking." },
          { id: "5-2-f23", front: "Wernicke's Area", back: "A brain area, usually in the left temporal lobe, involved in language comprehension and expression." }
        ],
        quiz: [
          {
            id: "5-2-q1",
            question: "After seeing a news story about a kidnapping, Odessa felt more afraid for her children, even though it is very rare. Which concept applies?",
            options: ["Belief perseverance", "Availability heuristic", "Representativeness heuristic", "Confirmation bias"],
            correctAnswer: "Availability heuristic",
            explanation: "The availability heuristic estimates likelihood based on availability in memory; vivid news images inflate perceived risk."
          },
          {
            id: "5-2-q2",
            question: "Whorf's hypothesis that language strictly determines the way we think is called:",
            options: ["Universal grammar", "Linguistic relativism", "Telegraphic speech", "Linguistic determinism"],
            correctAnswer: "Linguistic determinism",
            explanation: "Linguistic determinism is the extreme view that language absolutely dictates thought, a view which has since been softened to linguistic relativism."
          }
        ]
      },
      {
        id: "unit-5-sub-intelligence",
        title: "Intelligence",
        description: "Theories of intelligence, psychological testing, normal curves, and the question of bias.",
        flashcards: [
          { id: "5-3-f1", front: "Intelligence", back: "The ability to learn from experience, solve problems, and use knowledge to adapt to new situations." },
          { id: "5-3-f2", front: "General Intelligence (g)", back: "Spearman's concept that one general factor underlies all mental abilities and is measured by every task on an intelligence test." },
          { id: "5-3-f3", front: "Factor Analysis", back: "A statistical procedure that identifies clusters of related items on a test; used by Spearman and others." },
          { id: "5-3-f4", front: "Fluid (Gf) vs. Crystallized (Gc) Intelligence", back: "Fluid: ability to reason speedily/abstractly (decreases with age). Crystallized: accumulated knowledge/verbal skills (increases with age)." },
          { id: "5-3-f5", front: "Savant Syndrome", back: "A condition in which a person otherwise limited in mental ability has an exceptional specific skill (supports Gardner's multiple intelligences)." },
          { id: "5-3-f6", front: "Emotional Intelligence", back: "The ability to perceive, understand, manage, and use emotions (a critical part of social intelligence)." },
          { id: "5-3-f7", front: "Achievement vs. Aptitude Test", back: "Achievement: assesses what a person has learned. Aptitude: predicts a person's future performance/capacity to learn." },
          { id: "5-3-f8", front: "Mental Age", back: "Binet's measure; the level of performance typically associated with children of a certain chronological age." },
          { id: "5-3-f9", front: "Intelligence Quotient (IQ)", back: "Originally: mental age / chronological age x 100. Contemporary tests map performance relative to the average of age peers (set at 100)." },
          { id: "5-3-f10", front: "Stanford-Binet & WAIS", back: "Stanford-Binet: Terman's American revision of Binet's test. WAIS (Wechsler Adult Intelligence Scale): most widely used modern intelligence test." },
          { id: "5-3-f11", front: "Standardization", back: "Defining uniform testing procedures and meaningful scores by comparison with the performance of a pretested group." },
          { id: "5-3-f12", front: "Normal Curve", back: "A symmetrical, bell-shaped curve describing data distribution; 68% of scores fall within one standard deviation of the mean." },
          { id: "5-3-f13", front: "Reliability vs. Validity", back: "Reliability: test yields consistent results. Validity: test measures/predicts what it is supposed to." },
          { id: "5-3-f14", front: "Content vs. Predictive Validity", back: "Content: test samples the behavior of interest. Predictive: test successfully predicts the behavior it is designed to predict." },
          { id: "5-3-f15", front: "Flynn Effect", back: "The historical rise in intelligence test performance observed worldwide over the past century." },
          { id: "5-3-f16", front: "Cross-Sectional vs. Longitudinal Study", back: "Cross-sectional: compares people of different ages at one time. Longitudinal: follows and retests the same cohort over time." },
          { id: "5-3-f17", front: "Stereotype Threat", back: "A self-confirming concern that one will be evaluated based on a negative stereotype, which can impair performance." },
          { id: "5-3-f18", front: "Charles Spearman", back: "Proposed general intelligence (g factor) and used factor analysis." },
          { id: "5-3-f19", front: "Howard Gardner", back: "Proposed the theory of multiple intelligences (eight or nine relatively independent intelligences)." },
          { id: "5-3-f20", front: "Robert Sternberg", back: "Proposed the triarchic theory of intelligence: analytical, creative, and practical." },
          { id: "5-3-f21", front: "Alfred Binet", back: "Pioneered modern intelligence testing in France; measured mental age to identify children needing special ed." },
          { id: "5-3-f22", front: "Lewis Terman", back: "Revised Binet's test for the US (Stanford-Binet); promoted eugenics and believed intelligence was innately fixed." },
          { id: "5-3-f23", front: "David Wechsler", back: "Created the WAIS, providing separate scores for verbal, perceptual, working memory, and processing speed." },
          { id: "5-3-f24", front: "Carol Dweck", back: "Researched growth mindset (abilities can grow with effort) versus fixed mindset." },
          { id: "5-3-f25", front: "L.L. Thurstone", back: "Critic of Spearman who identified seven clusters of primary mental abilities rather than a single 'g' factor." },
          { id: "5-3-f26", front: "Cattell-Horn-Carroll (CHC) Theory", back: "The theory that our intelligence is based on general intelligence (g) as well as specific abilities, bridged by fluid (Gf) and crystallized (Gc) intelligence." },
          { id: "5-3-f27", front: "Psychometrics", back: "The scientific study of the measurement of human abilities, attitudes, and traits." },
          { id: "5-3-f28", front: "Fixed vs. Growth Mindset", back: "Fixed mindset is the view that abilities are unchangeable; Growth mindset is a focus on learning and growing, viewing abilities as expandable through effort." }
        ],
        quiz: [
          {
            id: "5-3-q1",
            question: "Historically, intelligence tests were sometimes used inappropriately to discriminate against specific groups. This is best illustrated by:",
            options: ["The Flynn effect", "The eugenics movement", "The Wechsler Adult Intelligence Scale", "Test standardization"],
            correctAnswer: "The eugenics movement",
            explanation: "The eugenics movement used early intelligence testing to promote the reproduction of those deemed 'fit' and discriminate against others."
          },
          {
            id: "5-3-q2",
            question: "A test is reliable if it:",
            options: ["Predicts future performance", "Measures what it intends to measure", "Yields dependably consistent results", "Is standardized on a large population"],
            correctAnswer: "Yields dependably consistent results",
            explanation: "Reliability refers to the extent to which a test yields consistent results on retesting or on split halves."
          }
        ]
      }
    ]
  },
  {
    id: "unit-6",
    title: "Unit 6: Developmental Psychology",
    description: "Physical, cognitive (Piaget), social (Erikson), moral (Kohlberg), and attachment changes across the human lifespan.",
    flashcards: [],
    quiz: [],
    subunits: [
      {
        id: "unit-6-sub-physical-cognitive",
        title: "Physical & Cognitive Development",
        description: "Prenatal development, teratogens, maturation, and Piaget's stages of cognitive development.",
        flashcards: [
          { id: "6-1-f1", front: "Developmental Psychology", back: "A branch of psychology that studies physical, cognitive, and social change throughout the lifespan." },
          { id: "6-1-f2", front: "Teratogens", back: "Agents, such as chemicals and viruses, that can reach the embryo or fetus during prenatal development and cause harm (e.g., Fetal Alcohol Syndrome)." },
          { id: "6-1-f3", front: "Habituation", back: "Decreasing responsiveness with repeated stimulation. Used to study infant cognition by showing what they recognize as familiar." },
          { id: "6-1-f4", front: "Maturation", back: "Biological growth processes that enable orderly changes in behavior, relatively uninfluenced by experience." },
          { id: "6-1-f5", front: "Critical Period", back: "An optimal period early in life when exposure to certain stimuli or experiences produces normal development." },
          { id: "6-1-f6", front: "Schema", back: "A concept or framework that organizes and interprets information." },
          { id: "6-1-f7", front: "Assimilation vs. Accommodation", back: "Assimilation: interpreting new experiences in terms of existing schemas. Accommodation: adapting current schemas to incorporate new information." },
          { id: "6-1-f8", front: "Sensorimotor Stage", back: "Piaget's stage (birth to 2 yrs) during which infants know the world through sensory impressions and motor activities. Achieve object permanence." },
          { id: "6-1-f9", front: "Object Permanence", back: "The awareness that things continue to exist even when not perceived." },
          { id: "6-1-f10", front: "Preoperational Stage", back: "Piaget's stage (2 to 6/7 yrs) where a child uses language but does not comprehend concrete logic. Marked by egocentrism and pretend play." },
          { id: "6-1-f11", front: "Conservation", back: "The principle that properties such as mass, volume, and number remain the same despite changes in forms of objects. Grasped in the concrete operational stage." },
          { id: "6-1-f12", front: "Egocentrism", back: "In Piaget's theory, the preoperational child's difficulty taking another's point of view." },
          { id: "6-1-f13", front: "Concrete Operational Stage", back: "Piaget's stage (7 to 11 yrs) where children can think logically about concrete events and perform arithmetical operations." },
          { id: "6-1-f14", front: "Formal Operational Stage", back: "Piaget's stage (12 yrs through adulthood) where people begin to think logically about abstract concepts." },
          { id: "6-1-f15", front: "Theory of Mind", back: "People's ideas about their own and others' mental states—feelings, perceptions, thoughts, and the behaviors these might predict." },
          { id: "6-1-f16", front: "Jean Piaget", back: "Developmental psychologist who proposed a 4-stage theory of cognitive development." },
          { id: "6-1-f17", front: "Lev Vygotsky", back: "Emphasized how the child's mind grows through interaction with the social-cultural environment; introduced 'scaffolding'." }
        ],
        quiz: [
          {
            id: "6-1-q1",
            question: "Vy is 11 years old and knows 10 - 7 = 3 but finds it difficult to solve 3x = 12 because she cannot understand the abstract letter. Piaget would place her in:",
            options: ["Concrete operational stage", "Formal operational stage", "Preoperational stage", "Sensorimotor stage"],
            correctAnswer: "Concrete operational stage",
            explanation: "In the concrete operational stage, children can think logically about concrete events but struggle with abstract concepts like algebra."
          },
          {
            id: "6-1-q2",
            question: "If a pregnant person drinks alcohol, their child may experience lifelong physical and mental abnormalities. Alcohol is considered a:",
            options: ["Syndrome", "Teratogen", "Congenital defect", "Sensitive period"],
            correctAnswer: "Teratogen",
            explanation: "Teratogens are agents, such as chemicals and viruses, that can cross the placenta and harm the developing fetus."
          }
        ]
      },
      {
        id: "unit-6-sub-social-emotional",
        title: "Social & Emotional Development",
        description: "Attachment, parenting styles, and Erikson's psychosocial stages across the lifespan.",
        flashcards: [
          { id: "6-2-f1", front: "Stranger Anxiety", back: "The fear of strangers that infants commonly display, beginning by about 8 months of age." },
          { id: "6-2-f2", front: "Attachment", back: "An emotional tie with others; shown in young children by their seeking closeness to caregivers and showing distress on separation." },
          { id: "6-2-f3", front: "Imprinting", back: "The process by which certain animals form strong attachments during an early-life critical period (studied by Konrad Lorenz)." },
          { id: "6-2-f4", front: "Strange Situation", back: "Mary Ainsworth's procedure for studying child-caregiver attachment styles." },
          { id: "6-2-f5", front: "Secure Attachment", back: "Infants comfortably explore environments in the presence of their caregiver, show distress when they leave, and find comfort in their return." },
          { id: "6-2-f6", front: "Insecure Attachment", back: "Infants display either clinging, anxious attachment or avoidant attachment that resists closeness." },
          { id: "6-2-f7", front: "Temperament", back: "A person's characteristic emotional reactivity and intensity, strongly influenced by heredity." },
          { id: "6-2-f8", front: "Basic Trust", back: "Erik Erikson's concept that securely attached children feel the world is predictable and trustworthy." },
          { id: "6-2-f9", front: "Parenting Styles", back: "Authoritarian (coercive), Permissive (unrestraining), Neglectful (uninvolved), Authoritative (confrontive/responsive)." },
          { id: "6-2-f10", front: "Identity vs. Role Confusion", back: "Erikson's stage for adolescence; the teenager's task is to solidify a sense of self by testing and integrating various roles." },
          { id: "6-2-f11", front: "Social Identity", back: "The 'we' aspect of our self-concept; the part of our answer to 'Who am I?' that comes from group memberships." },
          { id: "6-2-f12", front: "Intimacy", back: "In Erikson's theory, the ability to form close, loving relationships; a primary developmental task in young adulthood." },
          { id: "6-2-f13", front: "Emerging Adulthood", back: "A period from about age 18 to the mid-twenties in Western cultures when many are no longer adolescents but not yet fully independent adults." },
          { id: "6-2-f14", front: "Social Clock", back: "The culturally preferred timing of social events such as marriage, parenthood, and retirement." },
          { id: "6-2-f15", front: "Harry & Margaret Harlow", back: "Researchers who bred monkeys and proved that contact comfort (not just nourishment) was the basis of attachment." },
          { id: "6-2-f16", front: "Mary Ainsworth", back: "Designed the strange situation experiment to study secure vs. insecure infant attachment styles." },
          { id: "6-2-f17", front: "Diana Baumrind", back: "Identified four main parenting styles (authoritarian, permissive, neglectful, authoritative)." },
          { id: "6-2-f18", front: "Erik Erikson", back: "Proposed eight stages of psychosocial development across the lifespan, resolving crises like Trust vs. Mistrust." },
          { id: "6-2-f19", front: "Ecological Systems Theory", back: "Bronfenbrenner's theory of the social environment's influence on human development, using nested systems (microsystem, mesosystem, exosystem, macrosystem, chronosystem)." }
        ],
        quiz: [
          {
            id: "6-2-q1",
            question: "Parents set clear rules but also have discussions with their daughters about the rules and consequences. Their parents are following the:",
            options: ["Authoritarian parenting style", "Neglectful parenting style", "Authoritative parenting style", "Permissive parenting style"],
            correctAnswer: "Authoritative parenting style",
            explanation: "Authoritative parents are both demanding (setting clear rules) and responsive (encouraging open discussion)."
          },
          {
            id: "6-2-q2",
            question: "According to Erikson, the primary developmental task for an adolescent is to develop a sense of:",
            options: ["Trust", "Intimacy", "Competence", "Identity"],
            correctAnswer: "Identity",
            explanation: "During adolescence, Erikson asserted that the primary psychosocial crisis is Identity vs. Role Confusion."
          }
        ]
      },
      {
        id: "unit-6-sub-gender",
        title: "Gender & Sexual Orientation",
        description: "The biology and psychology of sex, gender roles, and the origins of sexual orientation.",
        flashcards: [
          { id: "6-3-f1", front: "Sex", back: "The biologically influenced characteristics by which people define male, female, and intersex." },
          { id: "6-3-f2", front: "Gender", back: "The attitudes, feelings, and behaviors that a given culture associates with a person's biological sex." },
          { id: "6-3-f3", front: "Intersex", back: "Possessing male and female biological sexual characteristics at birth." },
          { id: "6-3-f4", front: "Aggression", back: "Any physical or verbal behavior intended to harm someone physically or emotionally (more common in males)." },
          { id: "6-3-f5", front: "Relational Aggression", back: "An act of aggression intended to harm a person's relationship or social standing (slightly more common in females)." },
          { id: "6-3-f6", front: "X and Y Chromosomes", back: "X is found in both men and women (females have two). Y is found only in males." },
          { id: "6-3-f7", front: "Testosterone", back: "The most important male sex hormone, stimulating male sex organ growth and pubertal characteristics." },
          { id: "6-3-f8", front: "Primary & Secondary Sex Characteristics", back: "Primary: body structures that make reproduction possible. Secondary: nonreproductive traits (breasts, body hair)." },
          { id: "6-3-f9", front: "Spermarche & Menarche", back: "Spermarche: first ejaculation. Menarche: first menstrual period." },
          { id: "6-3-f10", front: "Gender Role", back: "A set of expected behaviors, attitudes, and traits for men and for women." },
          { id: "6-3-f11", front: "Gender Identity", back: "Our personal sense of being male, female, neither, or some combination." },
          { id: "6-3-f12", front: "Social Learning Theory", back: "The theory that we learn social behavior by observing, imitating, and being rewarded or punished." },
          { id: "6-3-f13", front: "Androgyny", back: "Displaying traditionally masculine and traditionally feminine psychological characteristics." },
          { id: "6-3-f14", front: "Sexual Orientation", back: "A person's sexual and emotional attraction to another person (heterosexual, same-sex, bisexual, asexual)." },
          { id: "6-3-f15", front: "Fraternal Birth-Order Effect", back: "Men with older biological brothers are somewhat more likely to be gay, possibly due to a maternal immune-system reaction." },
          { id: "6-3-f16", front: "Carol Gilligan", back: "Suggested that males and females differ in social development, with females tending to be more relationship-oriented/interdependent." },
          { id: "6-3-f17", front: "Alfred Kinsey", back: "Pioneered the study of human sexuality in the mid-20th century." },
          { id: "6-3-f18", front: "Sexuality", back: "Our thoughts, feelings, and actions related to our physical attraction to another." },
          { id: "6-3-f19", front: "Asexual", back: "Having no sexual attraction toward others." },
          { id: "6-3-f20", front: "Social Script", back: "A culturally modeled guide for how to act in various situations." },
          { id: "6-3-f21", front: "Alice Eagly", back: "Social psychologist who applied social learning theory to explain gender differences, noting that cultures with greater gender equality see smaller behavioral differences between sexes." }
        ],
        quiz: [
          {
            id: "6-3-q1",
            question: "Which of the following statements about gender differences in aggression is accurate?",
            options: [
              "Men show more relational aggression than women do.",
              "Women show more physical aggression than men do.",
              "Women show more relational aggression than men do.",
              "There are no gender differences in physical or relational aggression."
            ],
            correctAnswer: "Women show more relational aggression than men do.",
            explanation: "Men generally commit more physical aggression, while women are slightly more likely to commit relational aggression (harming social standing)."
          },
          {
            id: "6-3-q2",
            question: "Which term describes possessing both male and female biological sexual characteristics at birth?",
            options: ["Androgyny", "Transgender", "Intersex", "Bisexual"],
            correctAnswer: "Intersex",
            explanation: "Intersex describes an individual possessing male and female biological sexual characteristics at birth."
          }
        ]
      }
    ]
  },
  {
    id: "unit-7",
    title: "Unit 7: Motivation, Emotion, and Personality",
    description: "Physiological drive-reduction, theories of emotion, and analytical trait inventories of personality.",
    flashcards: [],
    quiz: [],
    subunits: [
      {
        id: "unit-7-sub-motivation-emotion",
        title: "Motivation & Emotion",
        description: "Theories of motivation, hunger, affiliation, achievement, and the physiological/cognitive components of emotion.",
        flashcards: [
          { id: "7-1-f1", front: "Motivation", back: "A need or desire that energizes and directs behavior." },
          { id: "7-1-f2", front: "Drive-Reduction Theory", back: "The idea that a physiological need creates an aroused state (a drive) that motivates an organism to satisfy the need and restore homeostasis." },
          { id: "7-1-f3", front: "Homeostasis", back: "A tendency to maintain a balanced or constant internal state; the regulation of any aspect of body chemistry around a particular level." },
          { id: "7-1-f4", front: "Yerkes-Dodson Law", back: "The principle that performance increases with arousal only up to a point, beyond which performance decreases." },
          { id: "7-1-f5", front: "Hierarchy of Needs", back: "Abraham Maslow's pyramid of human needs, beginning with physiological needs and moving up to safety, love/belonging, esteem, self-actualization, and self-transcendence." },
          { id: "7-1-f6", front: "Affiliation Need", back: "The need to build and maintain relationships and to feel part of a group." },
          { id: "7-1-f7", front: "Ostracism", back: "Deliberate social exclusion of individuals or groups; elicits increased activity in brain areas that also respond to physical pain." },
          { id: "7-1-f8", front: "Achievement Motivation", back: "A desire for significant accomplishment, mastery of skills, control, and attaining a high standard." },
          { id: "7-1-f9", front: "Grit", back: "In psychology, passion and perseverance in the pursuit of long-term goals." },
          { id: "7-1-f10", front: "Set Point", back: "The point at which a 'weight thermostat' is supposedly set. Falling below this weight increases hunger and lowers metabolic rate." },
          { id: "7-1-f11", front: "Emotion", back: "A response of the whole organism involving physiological arousal, expressive behaviors, and conscious experience." },
          { id: "7-1-f12", front: "James-Lange Theory", back: "The theory that our experience of emotion is our awareness of our physiological responses to emotion-arousing stimuli (arousal comes BEFORE emotion)." },
          { id: "7-1-f13", front: "Cannon-Bard Theory", back: "The theory that an emotion-arousing stimulus simultaneously triggers physiological responses and the subjective experience of emotion." },
          { id: "7-1-f14", front: "Two-Factor Theory (Schachter-Singer)", back: "The theory that to experience emotion one must be physically aroused and cognitively label the arousal." },
          { id: "7-1-f15", front: "Zajonc & LeDoux's 'Low Road'", back: "The finding that some emotional responses (like simple fears) occur instantly and bypass the thinking cortex, going straight to the amygdala." },
          { id: "7-1-f16", front: "Facial Feedback Effect", back: "The tendency of facial muscle states to trigger corresponding feelings such as fear, anger, or happiness." }
        ],
        quiz: [
          {
            id: "7-1-q1",
            question: "Which theory of emotion states that physically trembling occurs first, and the label of 'fear' is a direct result of perceiving that trembling?",
            options: ["Cannon-Bard Theory", "James-Lange Theory", "Schachter-Singer Two-Factor Theory", "Lazarus' Cognitive Appraisal Theory"],
            correctAnswer: "James-Lange Theory",
            explanation: "The James-Lange theory posits that physical physiological changes occur first, and our cognitive experience of emotion is our response to those physical changes."
          },
          {
            id: "7-1-q2",
            question: "When taking a difficult exam, it pays to be moderately aroused—alert but not trembling with nervousness. Which principle explains this relationship between arousal and performance?",
            options: ["Drive-reduction theory", "Hierarchy of needs", "Yerkes-Dodson law", "General Adaptation Syndrome"],
            correctAnswer: "Yerkes-Dodson law",
            explanation: "The Yerkes-Dodson law states that performance increases with arousal only up to a point, beyond which it decreases, with difficult tasks requiring slightly lower arousal for optimal performance."
          }
        ]
      },
      {
        id: "unit-7-sub-personality",
        title: "Personality",
        description: "Psychodynamic, humanistic, trait, and social-cognitive theories of personality, plus exploration of the self.",
        flashcards: [
          { id: "7-2-f1", front: "Personality", back: "An individual's characteristic pattern of thinking, feeling, and acting." },
          { id: "7-2-f2", front: "Psychoanalysis (Freud)", back: "Freud's theory attributing thoughts and actions to unconscious motives and conflicts. Emphasizes the id, ego, and superego." },
          { id: "7-2-f3", front: "Id, Ego, Superego", back: "Id: seeks immediate gratification (pleasure principle). Ego: executive mediator (reality principle). Superego: internalized ideals/conscience." },
          { id: "7-2-f4", front: "Defense Mechanisms", back: "In psychoanalytic theory, the ego's protective methods of reducing anxiety by unconsciously distorting reality (e.g., repression, projection, reaction formation)." },
          { id: "7-2-f5", front: "Collective Unconscious (Jung)", back: "Carl Jung's concept of a shared, inherited reservoir of memory traces from our species' history." },
          { id: "7-2-f6", front: "Projective Tests", back: "Personality tests, such as the TAT or Rorschach inkblot test, that provide ambiguous images designed to trigger projection of one's inner dynamics." },
          { id: "7-2-f7", front: "Humanistic Theories", back: "View personality with a focus on the potential for healthy personal growth. Championed by Abraham Maslow and Carl Rogers." },
          { id: "7-2-f8", front: "Unconditional Positive Regard", back: "A caring, accepting, nonjudgmental attitude, which Carl Rogers believed would help clients develop self-awareness and self-acceptance." },
          { id: "7-2-f9", front: "Trait", back: "A characteristic pattern of behavior or a disposition to feel and act in certain ways, assessed by self-report inventories." },
          { id: "7-2-f10", front: "The Big Five Factors (OCEAN)", back: "Openness, Conscientiousness, Extraversion, Agreeableness, and Neuroticism. Currently the most widely accepted trait theory (Costa & McCrae)." },
          { id: "7-2-f11", front: "Social-Cognitive Perspective", back: "Albert Bandura's view of behavior as influenced by the interaction between people's traits (including their thinking) and their social context." },
          { id: "7-2-f12", front: "Reciprocal Determinism", back: "The interacting influences of behavior, internal cognition, and environment." },
          { id: "7-2-f13", front: "Self-Esteem vs. Self-Efficacy", back: "Self-esteem: feelings of high or low self-worth. Self-efficacy: sense of competence and effectiveness on a specific task." },
          { id: "7-2-f14", front: "Self-Serving Bias", back: "A readiness to perceive ourselves favorably; accepting credit for success but blaming failure on external circumstances." },
          { id: "7-2-f15", front: "Narcissism", back: "Excessive self-love and self-absorption." }
        ],
        quiz: [
          {
            id: "7-2-q1",
            question: "Geri just had her 75th birthday. Based on the maturity principle in the Big Five personality traits, which of the following is most likely true?",
            options: ["Her personality is more stable than when she was 40, and she is likely more agreeable and conscientious.", "Her level of neuroticism has likely increased significantly.", "Her personality is less stable than it was in adolescence.", "She likely rates her personality very differently than her friends rate it."],
            correctAnswer: "Her personality is more stable than when she was 40, and she is likely more agreeable and conscientious.",
            explanation: "As people grow older, personality stabilizes, and the maturity principle states that people become more conscientious and agreeable and less neurotic."
          },
          {
            id: "7-2-q2",
            question: "Karl was late to his interview because he left the house late and got lost. If Karl exhibits the self-serving bias, how will he explain his lateness?",
            options: ["'Sometimes I procrastinate and don't leave enough time.'", "'I spent too much time trying to find a tie that matched.'", "'There were too many cars on the road today, which made me late.'", "'I have a terrible sense of direction.'"],
            correctAnswer: "'There were too many cars on the road today, which made me late.'",
            explanation: "Self-serving bias involves attributing failures to external, situational factors rather than internal flaws."
          }
        ]
      }
    ]
  },
  {
    id: "unit-8",
    title: "Unit 8: Clinical Psychology",
    description: "Definition/classification of disorders (DSM-5-TR), symptoms of major conditions, stress responses, and cognitive/behavioral therapies.",
    flashcards: [],
    quiz: [],
    subunits: [
      {
        id: "unit-8-sub-stress-health",
        title: "Stress & Health",
        description: "Stress appraisal, the General Adaptation Syndrome, and psychoneuroimmunology.",
        flashcards: [
          { id: "8-1-f1", front: "Stress", back: "The process by which we perceive and respond to certain events (stressors) that we appraise as threatening or challenging." },
          { id: "8-1-f2", front: "General Adaptation Syndrome (GAS)", back: "Hans Selye's concept of the body's adaptive response to stress in three phases: alarm, resistance, and exhaustion." },
          { id: "8-1-f3", front: "Tend-and-Befriend Response", back: "Under stress, people (especially women) often provide support to others (tend) and bond with and seek support from others (befriend)." },
          { id: "8-1-f4", front: "Psychoneuroimmunology", back: "The study of how psychological, neural, and endocrine processes together affect the immune system and resulting health." },
          { id: "8-1-f5", front: "Type A vs. Type B Personality", back: "Type A: competitive, hard-driving, impatient, verbally aggressive, anger-prone (higher risk of heart disease). Type B: easygoing, relaxed." },
          { id: "8-1-f6", front: "Problem-Focused vs. Emotion-Focused Coping", back: "Problem-focused: changing the stressor directly. Emotion-focused: avoiding the stressor and tending to emotional needs." },
          { id: "8-1-f7", front: "Learned Helplessness", back: "The hopelessness and passive resignation an animal or human learns when unable to avoid repeated aversive events." },
          { id: "8-1-f8", front: "External vs. Internal Locus of Control", back: "External: outside forces determine fate. Internal: we control our own fate." },
          { id: "8-1-f9", front: "Positive Psychology", back: "The scientific study of human flourishing (championed by Martin Seligman), aiming to discover and promote strengths that help individuals thrive." },
          { id: "8-1-f10", front: "Health Psychology", back: "A subfield of psychology that explores the impact of psychological, behavioral, and cultural factors on health and wellness." },
          { id: "8-1-f11", front: "Psychoneuroimmunology", back: "The study of how psychological, neural, and endocrine processes together affect our immune system and resulting health." },
          { id: "8-1-f12", front: "Subjective Well-Being", back: "Self-perceived happiness or satisfaction with life." },
          { id: "8-1-f13", front: "Feel-Good, Do-Good Phenomenon", back: "People's tendency to be helpful when already in a good mood." },
          { id: "8-1-f14", front: "Adaptation-Level Phenomenon", back: "Our tendency to form judgments (of sounds, of lights, of income) relative to a neutral level defined by our prior experience." },
          { id: "8-1-f15", front: "Relative Deprivation", back: "The perception that we are worse off relative to those with whom we compare ourselves." },
          { id: "8-1-f16", front: "Broaden-and-Build Theory", back: "Theory proposing that positive emotions broaden our awareness, which over time helps us build novel and meaningful skills and resilience." },
          { id: "8-1-f17", front: "Resilience & Posttraumatic Growth", back: "Resilience is the personal strength to cope with stress; posttraumatic growth refers to positive psychological changes following extremely challenging life crises." },
          { id: "8-1-f18", front: "Mindfulness Meditation", back: "A reflective practice in which people attend to current experiences in a nonjudgmental and accepting manner." },
          { id: "8-1-f19", front: "Gratitude", back: "An appreciative emotion people often experience when they benefit from others' actions or recognize their own good fortune." }
        ],
        quiz: [
          {
            id: "8-1-q1",
            question: "Hans Selye's outline of the body's automatic physiological response to chronic stress is known as:",
            options: ["Drive-Reduction Spectrum", "General Adaptation Syndrome", "Arousal Optimization", "Fight-or-Flight Cycle"],
            correctAnswer: "General Adaptation Syndrome",
            explanation: "The General Adaptation Syndrome details the body's three-stage response (Alarm, Resistance, Exhaustion) to prolonged stress encounters."
          }
        ]
      },
      {
        id: "unit-8-sub-disorders",
        title: "Psychological Disorders",
        description: "Classification of disorders (DSM-5-TR) and symptoms of anxiety, mood, psychotic, and personality disorders.",
        flashcards: [
          { id: "8-2-f1", front: "Psychological Disorder", back: "A syndrome marked by a clinically significant disturbance in an individual's cognition, emotion regulation, or behavior that is maladaptive." },
          { id: "8-2-f2", front: "Medical Model", back: "The concept that diseases (psychological disorders) have physical causes that can be diagnosed, treated, and cured." },
          { id: "8-2-f3", front: "Biopsychosocial Approach & Diathesis-Stress", back: "Disorders arise from biological, psychological, and social-cultural interactions. Diathesis-stress proposes that genetic predispositions combine with environmental stressors." },
          { id: "8-2-f4", front: "DSM-5-TR", back: "The American Psychiatric Association's Diagnostic and Statistical Manual of Mental Disorders; a widely used system for classifying disorders." },
          { id: "8-2-f5", front: "Generalized Anxiety Disorder (GAD)", back: "An anxiety disorder in which a person is continually tense, apprehensive, and in a state of autonomic nervous system arousal." },
          { id: "8-2-f6", front: "Panic Disorder", back: "An anxiety disorder marked by unpredictable, minutes-long episodes of intense dread (panic attacks)." },
          { id: "8-2-f7", front: "Specific Phobia", back: "An anxiety disorder marked by a persistent, irrational fear and avoidance of a specific object, activity, or situation." },
          { id: "8-2-f8", front: "Obsessive-Compulsive Disorder (OCD)", back: "A disorder characterized by unwanted repetitive thoughts (obsessions), actions (compulsions), or both." },
          { id: "8-2-f9", front: "Posttraumatic Stress Disorder (PTSD)", back: "Haunting memories, nightmares, hypervigilance, social withdrawal, and insomnia lingering for 4+ weeks after a traumatic experience." },
          { id: "8-2-f10", front: "Major Depressive Disorder", back: "A disorder in which a person experiences 5+ symptoms (including depressed mood or loss of interest) for two or more weeks." },
          { id: "8-2-f11", front: "Bipolar Disorder", back: "A disorder in which a person alternates between the hopelessness/lethargy of depression and the overexcited state of mania." },
          { id: "8-2-f12", front: "Schizophrenia", back: "A psychotic disorder characterized by delusions, hallucinations, disorganized speech, and/or diminished, inappropriate emotional expression." },
          { id: "8-2-f13", front: "Positive vs. Negative Symptoms (Schizophrenia)", back: "Positive: presence of inappropriate behaviors (hallucinations, delusions). Negative: absence of appropriate behaviors (flat affect, catatonia)." },
          { id: "8-2-f14", front: "Dissociative Identity Disorder (DID)", back: "A rare dissociative disorder in which a person exhibits two or more distinct and alternating personalities." },
          { id: "8-2-f15", front: "Antisocial Personality Disorder", back: "A personality disorder in which a person (usually male) exhibits a lack of conscience for wrongdoing, even toward family; may be ruthless or a con artist." },
          { id: "8-2-f16", front: "Anorexia Nervosa & Bulimia Nervosa", back: "Anorexia: starvation diet despite being underweight. Bulimia: binge eating followed by inappropriate weight-loss behaviors (vomiting, laxatives, excessive exercise)." },
          { id: "8-2-f17", front: "Agoraphobia", back: "Fear or avoidance of situations, such as crowds or wide open places, where one may experience a loss of control and panic." },
          { id: "8-2-f18", front: "Hoarding Disorder", back: "A persistent difficulty parting with possessions, regardless of their value." },
          { id: "8-2-f19", front: "Persistent Depressive Disorder", back: "A disorder in which people experience a depressed mood on more days than not for at least two years. (Formerly called dysthymia)." },
          { id: "8-2-f20", front: "Bipolar I vs. Bipolar II", back: "Bipolar I involves severe, highly energetic manic episodes; Bipolar II involves depression alternating with a milder hypomania." },
          { id: "8-2-f21", front: "Mania", back: "A hyperactive, wildly optimistic state in which dangerously poor judgment is common." },
          { id: "8-2-f22", front: "Rumination", back: "Compulsive fretting; overthinking our problems and their causes." },
          { id: "8-2-f23", front: "Schizophrenia Spectrum Disorders", back: "Disorders characterized by delusions, hallucinations, disorganized thinking or speech, and negative symptoms." },
          { id: "8-2-f24", front: "Chronic vs. Acute Schizophrenia", back: "Chronic appears by early adulthood and recovery is doubtful; Acute occurs in response to trauma with a much higher likelihood of recovery." },
          { id: "8-2-f25", front: "Dissociative Amnesia", back: "A disorder in which people experience memory gaps regarding trauma-related events, people, places, or aspects of their identity." },
          { id: "8-2-f26", front: "Autism Spectrum Disorder (ASD)", back: "A disorder appearing in childhood marked by limitations in communication and social interaction, and rigidly fixated interests/repetitive behaviors." },
          { id: "8-2-f27", front: "ADHD", back: "Attention-deficit/hyperactivity disorder; marked by extreme inattention and/or hyperactivity and impulsivity." }
        ],
        quiz: [
          {
            id: "8-2-q1",
            question: "Under the diagnostic guidelines of the DSM-5-TR, which symptom is classified as a positive symptom of schizophrenia?",
            options: ["Flat affect", "Alogia (lack of speech)", "Auditory hallucinations", "Social withdrawal"],
            correctAnswer: "Auditory hallucinations",
            explanation: "Positive symptoms are the presence of inappropriate or abnormal behaviors, such as hallucinations or delusions, which are added to normal behavior."
          },
          {
            id: "8-2-q2",
            question: "A person alternates between states of deep depression and hyperactive, wildly optimistic impulsivity. This describes which disorder?",
            options: ["Major depressive disorder", "Generalized anxiety disorder", "Bipolar disorder", "Antisocial personality disorder"],
            correctAnswer: "Bipolar disorder",
            explanation: "Bipolar disorder is characterized by alternating cycles of depressive lethargy and manic overexcitement."
          }
        ]
      },
      {
        id: "unit-8-sub-treatment",
        title: "Treatment of Psychological Disorders",
        description: "Psychotherapy, biomedical therapies, and methods for evaluating therapeutic effectiveness.",
        flashcards: [
          { id: "8-3-f1", front: "Psychotherapy", back: "Treatment involving psychological techniques; interactions between a trained therapist and someone seeking to overcome difficulties or achieve personal growth." },
          { id: "8-3-f2", front: "Biomedical Therapy", back: "Prescribed medications or procedures that act directly on the person's physiology." },
          { id: "8-3-f3", front: "Psychoanalysis", back: "Freud's technique utilizing free association, resistances, dreams, and transferences to release repressed feelings and gain self-insight." },
          { id: "8-3-f4", front: "Client-Centered (Person-Centered) Therapy", back: "Carl Rogers' humanistic therapy using active listening within a genuine, accepting, empathic environment (unconditional positive regard)." },
          { id: "8-3-f5", front: "Behavior Therapy", back: "Therapy that applies learning principles (classical and operant conditioning) to the elimination of unwanted behaviors." },
          { id: "8-3-f6", front: "Systematic Desensitization", back: "A type of exposure therapy that associates a pleasant, relaxed state with gradually increasing anxiety-triggering stimuli." },
          { id: "8-3-f7", front: "Aversive Conditioning", back: "Associates an unpleasant state (such as nausea) with an unwanted behavior (such as drinking alcohol)." },
          { id: "8-3-f8", front: "Cognitive Therapy", back: "Therapy that teaches people new, more adaptive ways of thinking, based on the assumption that thoughts intervene between events and emotional reactions (e.g., Beck's therapy for depression)." },
          { id: "8-3-f9", front: "Cognitive-Behavioral Therapy (CBT)", back: "A popular integrative therapy that combines cognitive therapy (changing self-defeating thinking) with behavior therapy (changing behavior)." },
          { id: "8-3-f10", front: "Meta-Analysis", back: "A statistical procedure for combining the results of many different research studies, widely used to prove psychotherapy's effectiveness." },
          { id: "8-3-f11", front: "Evidence-Based Practice", back: "Clinical decision making that integrates the best available research with clinical expertise and patient characteristics/preferences." },
          { id: "8-3-f12", front: "Psychopharmacology", back: "The study of the effects of drugs on mind and behavior." },
          { id: "8-3-f13", front: "Antipsychotic & Antidepressant Drugs", back: "Antipsychotics block dopamine to treat schizophrenia. Antidepressants (like SSRIs) alter serotonin/norepinephrine to treat depression and anxiety." },
          { id: "8-3-f14", front: "Electroconvulsive Therapy (ECT)", back: "A biomedical therapy for severe depression in which a brief electric current is sent through the brain of an anesthetized patient." },
          { id: "8-3-f15", front: "Deinstitutionalization", back: "The process of moving people with psychological disorders out of institutional facilities and into community-based programs." },
          { id: "8-3-f16", front: "Eclectic Approach", back: "An approach to psychotherapy that uses techniques from various forms of therapy." },
          { id: "8-3-f17", front: "Insight Therapies", back: "Therapies (like psychoanalytic and humanistic) that aim to improve functioning by increasing a person's awareness of underlying motives and defenses." },
          { id: "8-3-f18", front: "Active Listening & Unconditional Positive Regard", back: "Features of Rogers' person-centered therapy involving empathic echoing and a caring, nonjudgmental attitude." },
          { id: "8-3-f19", front: "Counterconditioning", back: "Using classical conditioning to evoke new responses to stimuli triggering unwanted behaviors (includes exposure therapy and aversive conditioning)." },
          { id: "8-3-f20", front: "Virtual Reality Exposure Therapy", back: "Treats anxiety through creative electronic simulations safely exposing people to specific fears (e.g., flying, spiders)." },
          { id: "8-3-f21", front: "Token Economy", back: "An operant conditioning procedure where people earn a token for desired behavior to exchange for privileges or treats." },
          { id: "8-3-f22", front: "Rational-Emotive Behavior Therapy (REBT)", back: "A confrontational cognitive therapy (developed by Albert Ellis) that vigorously challenges people's illogical, self-defeating attitudes." },
          { id: "8-3-f23", front: "Family & Group Therapy", back: "Therapy treating the family as a system, or treating individuals in a group setting to explore social behaviors and realize others share their problems." },
          { id: "8-3-f24", front: "Therapeutic Alliance", back: "A bond of trust and mutual understanding between a therapist and client, who work together constructively to overcome the client's problem." },
          { id: "8-3-f25", front: "Transcranial Magnetic Stimulation (TMS)", back: "The application of repeated pulses of magnetic energy to the brain; used to stimulate or suppress brain activity." },
          { id: "8-3-f26", front: "Psychosurgery & Lobotomy", back: "Removing or destroying brain tissue to change behavior. Lobotomy (now rare) cut nerves connecting the frontal lobes to emotion-controlling centers." },
          { id: "8-3-f27", front: "Hypnosis", back: "A social interaction in which a hypnotist suggests to a subject that certain perceptions, feelings, or behaviors will spontaneously occur." }
        ],
        quiz: [
          {
            id: "8-3-q1",
            question: "Which therapeutic approach actively targets self-defeating, distorted cognitive thoughts and couples it with behavioral modifications to treat depression and anxiety?",
            options: ["Psychoanalysis", "Client-Centered Therapy", "Cognitive-Behavioral Therapy (CBT)", "Biomedical Antipsychotics"],
            correctAnswer: "Cognitive-Behavioral Therapy (CBT)",
            explanation: "CBT is an integrative therapy that helps patients identify harmful automatic thought patterns and rewrite clinical behaviors."
          },
          {
            id: "8-3-q2",
            question: "To treat a patient's fear of spiders, a therapist associates a state of deep relaxation with gradually increasing exposures to spiders. This technique is called:",
            options: ["Aversive conditioning", "Systematic desensitization", "Cognitive therapy", "Operant conditioning"],
            correctAnswer: "Systematic desensitization",
            explanation: "Systematic desensitization uses classical conditioning to gradually replace an anxious response with a relaxed response to a feared stimulus."
          }
        ]
      }
    ]
  },
  {
    id: "unit-9",
    title: "Unit 9: Social Psychology",
    description: "How humans perceive, influence, and relate to one another; group dynamics, obedience, conformity, prejudice, and prosocial behavior.",
    flashcards: [],
    quiz: [],
    subunits: [
      {
        id: "unit-9-sub-influence",
        title: "Social Cognition & Influence",
        description: "Attribution, attitudes, conformity, obedience, and group dynamics.",
        flashcards: [
          { id: "9-1-f1", front: "Social Psychology", back: "The scientific study of how we think about, influence, and relate to one another." },
          { id: "9-1-f2", front: "Fundamental Attribution Error", back: "The tendency for observers to underestimate situational constraints and overestimate personal disposition when analyzing others' behavior." },
          { id: "9-1-f3", front: "Attitude", back: "Feelings, often influenced by our beliefs, that predispose us to respond in a particular way to objects, people, and events." },
          { id: "9-1-f4", front: "Foot-in-the-Door Phenomenon", back: "The tendency for people who have first agreed to a small request to comply later with a larger request." },
          { id: "9-1-f5", front: "Cognitive Dissonance Theory", back: "Festinger's theory that we act to reduce the discomfort we feel when two of our thoughts are inconsistent (e.g., when actions clash with attitudes)." },
          { id: "9-1-f6", front: "Conformity", back: "Adjusting behavior or thinking to coincide with a group standard. Famously studied by Solomon Asch using line comparisons." },
          { id: "9-1-f7", front: "Normative vs. Informational Social Influence", back: "Normative: conforming to gain approval. Informational: conforming because we accept others' opinions about reality." },
          { id: "9-1-f8", front: "Obedience", back: "Complying with an order or command. Stanley Milgram famously tested this by instructing participants to deliver electric shocks to a 'learner'." },
          { id: "9-1-f9", front: "Social Facilitation", back: "Improved performance on simple or well-learned tasks in the presence of others." },
          { id: "9-1-f10", front: "Social Loafing", back: "The tendency for people in a group to exert less effort when pooling their efforts toward a common goal than when individually accountable." },
          { id: "9-1-f11", front: "Deindividuation", back: "The loss of self-awareness and self-restraint occurring in group situations that foster arousal and anonymity." },
          { id: "9-1-f12", front: "Group Polarization", back: "The enhancement of a group's prevailing inclinations through discussion within the group." },
          { id: "9-1-f13", front: "Groupthink", back: "The mode of thinking that occurs when the desire for harmony in a decision-making group overrides a realistic appraisal of alternatives." },
          { id: "9-1-f14", front: "Person Perception", back: "How we form impressions of ourselves and others, including attributions of behavior." },
          { id: "9-1-f15", front: "Attribution Theory", back: "The theory that we explain someone's behavior by crediting either the situation or the person's stable, enduring traits." },
          { id: "9-1-f16", front: "Actor-Observer Bias", back: "The tendency to attribute our own behavior to external/situational causes, but attribute others' behavior to internal/dispositional causes." },
          { id: "9-1-f17", front: "Ingroup vs. Outgroup", back: "Ingroup is 'Us' (people with whom we share a common identity). Outgroup is 'Them' (those perceived as different or apart from our ingroup)." },
          { id: "9-1-f18", front: "Tight vs. Loose Culture", back: "A tight culture has clearly defined, reliably imposed norms. A loose culture has flexible, informal norms." }
        ],
        quiz: [
          {
            id: "9-1-q1",
            question: "In Stanley Milgram's classic social experiment obedience studies, what percentage of modern participants complied fully to maximum voltage (450 volts)?",
            options: ["Less than 10 percent", "Around 25 percent", "Over 60 percent (approx. 65%)", "Over 95 percent"],
            correctAnswer: "Over 60 percent (approx. 65%)",
            explanation: "Milgram discovered that over 60 percent of participants complied fully to administering the final shock when urged by a perceived authority figure."
          },
          {
            id: "9-1-q2",
            question: "When people in a group discussion hold mildly similar viewpoints and, after talking, arrive at an extremely polarized, aggressive consensus, they have experienced:",
            options: ["Deindividuation", "Group Polarization", "Social Loafing", "Bystander Inhibition"],
            correctAnswer: "Group Polarization",
            explanation: "Group polarization is the self-reinforcing effect where group discussions strengthen preexisting attitudes of the group members."
          }
        ]
      },
      {
        id: "unit-9-sub-relations",
        title: "Social Relations",
        description: "Prejudice, aggression, attraction, altruism, and peacemaking.",
        flashcards: [
          { id: "9-2-f1", front: "Prejudice", back: "An unjustifiable and usually negative attitude toward a group and its members. Includes emotions, stereotypes, and discrimination." },
          { id: "9-2-f2", front: "Stereotype", back: "A generalized (sometimes accurate but often overgeneralized) belief about a group of people." },
          { id: "9-2-f3", front: "Discrimination", back: "Unjustifiable negative behavior toward a group and its members." },
          { id: "9-2-f4", front: "Just-World Phenomenon", back: "The tendency for people to believe the world is just and that people therefore get what they deserve." },
          { id: "9-2-f5", front: "Ingroup Bias", back: "The tendency to favor our own group ('us' vs. 'them')." },
          { id: "9-2-f6", front: "Scapegoat Theory", back: "The theory that prejudice offers an outlet for anger by providing someone to blame." },
          { id: "9-2-f7", front: "Other-Race Effect", back: "The tendency to recall faces of one's own race more accurately than faces of other races." },
          { id: "9-2-f8", front: "Aggression", back: "Any physical or verbal behavior intended to harm someone physically or emotionally." },
          { id: "9-2-f9", front: "Frustration-Aggression Principle", back: "The principle that frustration—the blocking of an attempt to achieve some goal—creates anger, which can generate aggression." },
          { id: "9-2-f10", front: "Mere Exposure Effect", back: "The tendency for repeated exposure to novel stimuli to increase our liking of them." },
          { id: "9-2-f11", front: "Passionate vs. Companionate Love", back: "Passionate: aroused state of intense positive absorption (early). Companionate: deep affectionate attachment (later/intertwined lives)." },
          { id: "9-2-f12", front: "Altruism", back: "Unselfish regard for the welfare of others." },
          { id: "9-2-f13", front: "Bystander Effect", back: "The tendency for any given bystander to be less likely to give aid if other bystanders are present (diffusion of responsibility)." },
          { id: "9-2-f14", front: "Social Exchange Theory", back: "The theory that our social behavior is an exchange process, aiming to maximize benefits and minimize costs." },
          { id: "9-2-f15", front: "Reciprocity Norm & Social-Responsibility Norm", back: "Reciprocity: we should return help to those who helped us. Social-responsibility: we should help those needing help regardless of cost." },
          { id: "9-2-f16", front: "Superordinate Goals", back: "Shared goals that override differences among people and require their cooperation (Muzafer Sherif's Robbers Cave experiment)." },
          { id: "9-2-f17", front: "Peripheral vs. Central Route Persuasion", back: "Peripheral uses incidental cues (e.g., speaker's attractiveness); Central uses evidence and logical arguments to influence interested people." },
          { id: "9-2-f18", front: "Equity", back: "A condition in which people receive from a relationship in proportion to what they give to it; key to companionate love." },
          { id: "9-2-f19", front: "Self-Disclosure", back: "The act of revealing intimate aspects of ourselves to others; builds intimacy." },
          { id: "9-2-f20", front: "Conflict & Social Trap", back: "Conflict is a perceived incompatibility of actions/goals. A social trap occurs when conflicting parties pursue self-interest, causing mutually destructive behavior." },
          { id: "9-2-f21", front: "Mirror-Image Perceptions", back: "Mutual views often held by conflicting parties, where each side sees itself as ethical and peaceful and the other as evil and aggressive." },
          { id: "9-2-f22", front: "Self-Fulfilling Prophecy", back: "A belief that leads to its own fulfillment." },
          { id: "9-2-f23", front: "GRIT", back: "Graduated and Reciprocated Initiatives in Tension-Reduction; a strategy designed to decrease international tensions." }
        ],
        quiz: [
          {
            id: "9-2-q1",
            question: "Samir assumes the people experiencing homelessness he sees each morning must have done something to deserve their situation. This represents:",
            options: ["An ingroup bias", "Altruism", "The just-world phenomenon", "The bystander effect"],
            correctAnswer: "The just-world phenomenon",
            explanation: "The just-world phenomenon is the belief that the world is fair and people get what they deserve."
          },
          {
            id: "9-2-q2",
            question: "According to the bystander effect, a person is LEAST likely to help in an emergency if:",
            options: ["They are alone with the victim.", "The person in need is similar to them.", "Several other bystanders are present.", "They are in a good mood."],
            correctAnswer: "Several other bystanders are present.",
            explanation: "The bystander effect (diffusion of responsibility) shows that the presence of multiple witnesses drastically reduces the likelihood that any one individual will offer help."
          }
        ]
      }
    ]
  },
  {
    id: "unit-10",
    title: "Unit 10: Enrichment Modules",
    description: "Biological, psychological, and social-cultural influences on drug use; psychology in the workplace; and animal cognition and language.",
    flashcards: [],
    quiz: [],
    subunits: [
      {
        id: "unit-10-sub-drugs",
        title: "EM.1 Influences on Drug Use",
        description: "Biological, psychological, and social-cultural influences on drug use and addiction.",
        flashcards: [
          { id: "10-1-f1", front: "Biological Influences on Drug Use", back: "Genetic predispositions (e.g., variations in neurotransmitter systems like dopamine) that make certain individuals more vulnerable to addiction." },
          { id: "10-1-f2", front: "Psychological Influences on Drug Use", back: "Feelings of meaninglessness, significant stress, or psychological disorders such as depression that lead to substance use as a coping mechanism." },
          { id: "10-1-f3", front: "Social-Cultural Influences on Drug Use", back: "Peer pressure, difficult environments, and cultural acceptance of drug use that influence experimentation and regular use." }
        ],
        quiz: [
          {
            id: "10-1-q1",
            question: "Dr. Kesler studies biological influences on drug use. Which might be a variable she studies?",
            options: ["Variations in neurotransmitter systems", "The type of urban environment", "Peer influence", "The degree to which one feels a sense of purpose"],
            correctAnswer: "Variations in neurotransmitter systems",
            explanation: "Biological influences include genetic predispositions and variations in neurotransmitter systems like dopamine."
          }
        ]
      },
      {
        id: "unit-10-sub-work",
        title: "EM.2 Psychology at Work",
        description: "Industrial-Organizational (I/O) psychology, personnel psychology, organizational psychology, human factors psychology, and leadership.",
        flashcards: [
          { id: "10-2-f1", front: "Flow", back: "A completely involved, focused state of consciousness, with diminished awareness of self and time, resulting from optimal engagement of one's skills." },
          { id: "10-2-f2", front: "Industrial-Organizational (I/O) Psychology", back: "The application of psychological concepts and methods to optimizing human behavior in workplaces." },
          { id: "10-2-f3", front: "Personnel Psychology", back: "An I/O psychology subfield that helps with job seeking, and with employee recruitment, selection, placement, training, appraisal, and development." },
          { id: "10-2-f4", front: "Organizational Psychology", back: "An I/O psychology subfield that examines organizational influences on worker satisfaction and productivity and facilitates organizational change." },
          { id: "10-2-f5", front: "Human Factors Psychology", back: "A subfield of I/O psychology that explores how people and machines interact and how machines and physical environments can be made safe and easy to use." },
          { id: "10-2-f6", front: "Structured Interview", back: "An interview process that asks the same job-relevant questions of all applicants, each of whom is rated on established scales." },
          { id: "10-2-f7", front: "Task Leadership", back: "Goal-oriented leadership that sets standards, organizes work, and focuses attention on goals." },
          { id: "10-2-f8", front: "Social Leadership", back: "Group-oriented leadership that builds teamwork, mediates conflict, and offers support." }
        ],
        quiz: [
          {
            id: "10-2-q1",
            question: "Job seekers at a technology company are screened by different interviewers, but each is asked the same questions. The company is making use of:",
            options: ["structured interviews.", "employee engagement.", "unstructured interviews.", "human factors psychology."],
            correctAnswer: "structured interviews.",
            explanation: "Structured interviews offer a disciplined method of collecting information by asking all applicants the same questions in the same order."
          }
        ]
      },
      {
        id: "unit-10-sub-animals",
        title: "EM.3 Animal Thinking and Language",
        description: "Animal cognition, cultural transmission in animals, and animal language capabilities.",
        flashcards: [
          { id: "10-3-f1", front: "Animal Cognition", back: "The study of animal learning, memory, thinking, and language. Animals have demonstrated ability to form concepts, count, and use insight." },
          { id: "10-3-f2", front: "Cultural Transmission in Animals", back: "The process by which animals invent behaviors and transmit cultural patterns to their observing peers and offspring (e.g., chimpanzees teaching tool use)." },
          { id: "10-3-f3", front: "Animal Language", back: "While only humans communicate in complex sentences with syntax, apes have learned to communicate with humans by signing or pushing buttons to string words together." }
        ],
        quiz: [
          {
            id: "10-3-q1",
            question: "Dr. Valentine found that apes share certain customs, such as ways of using tools. Her discovery is an example of:",
            options: ["self-awareness.", "cultural transmission.", "insight.", "language use."],
            correctAnswer: "cultural transmission.",
            explanation: "When animals invent behaviors and pass those local customs down to observing peers and offspring, it is called cultural transmission."
          }
        ]
      }
    ]
  } 
];

// Map and programmatically roll unified child lists into parent arrays for general queues
export const studyData: UnitData[] = originalStudyData.map(unit => {
  if (unit.subunits) {
    const updatedSubunits = unit.subunits.map(sub => ({
      ...sub,
      cyu: cyuData[sub.id] || []
    }));

    const accumCardIds = new Set(unit.flashcards.map(f => f.id));
    const accumQuizIds = new Set(unit.quiz.map(q => q.id));

    const combinedFlashcards = [...unit.flashcards];
    const combinedQuiz = [...unit.quiz];

    updatedSubunits.forEach(sub => {
      sub.flashcards.forEach(f => {
        if (!accumCardIds.has(f.id)) {
          accumCardIds.add(f.id);
          combinedFlashcards.push(f);
        }
      });
      sub.quiz.forEach(q => {
        if (!accumQuizIds.has(q.id)) {
          accumQuizIds.add(q.id);
          combinedQuiz.push(q);
        }
      });
    });

    return {
      ...unit,
      subunits: updatedSubunits,
      flashcards: combinedFlashcards,
      quiz: combinedQuiz
    };
  }
  return unit;
});
