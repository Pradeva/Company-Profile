import {
  FiGlobe,
  FiServer,
  FiSmartphone,
  FiEye,
  FiLayout,
  FiTool,
} from 'react-icons/fi';

const MAP = {
  FiGlobe,
  FiServer,
  FiSmartphone,
  FiEye,
  FiLayout,
  FiTool,
};

export default function ServiceIcon({ name, ...props }) {
  const Icon = MAP[name] || FiGlobe;
  return <Icon {...props} />;
}
